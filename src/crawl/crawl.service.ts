import { Injectable } from '@nestjs/common';
import { CreateCrawlDto } from './dto/create-crawl.dto';
import { UpdateCrawlDto } from './dto/update-crawl.dto';
import * as puppeteer from 'puppeteer';
import { KnownDevices } from 'puppeteer';

@Injectable()
export class CrawlService {
  async create(createCrawlDto: any) {
    const { keyword } = createCrawlDto;
    
    const proxy = 'http://proxy-server:port'; // Thay 'proxy-server:port' bằng thông tin proxy của bạn
    let browser, page;
  
    try {
      // Khởi tạo trình duyệt với proxy
      browser = await puppeteer.launch({
        headless: false,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          `--proxy-server=${proxy}`, // Sử dụng proxy
        ],
        userDataDir: null,  // Đảm bảo không sử dụng profile cũ
      });
  
      page = await browser.newPage();
  
      // Giả lập giao diện mobile (iPhone X)
      const iPhone = KnownDevices['iPhone X'];
      await page.emulate(iPhone);
  
      // Điều hướng đến Google Mobile
      console.log('Đang điều hướng tới Google Mobile...');
      await page.goto('https://www.google.com', { waitUntil: 'load', timeout: 60000 });
  
      // Nhập từ khóa vào ô tìm kiếm và gửi
      console.log('Nhập từ khóa vào ô tìm kiếm:', keyword);
      await page.waitForSelector('input[name="q"]', { timeout: 10000 });
      await page.type('input[name="q"]', keyword);
      await page.keyboard.press('Enter');
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
  
      // Tìm và click vào kết quả tìm kiếm đầu tiên
      console.log('Tìm và click vào kết quả top 1...');
      await page.waitForSelector('h3', { timeout: 10000 });
  
      // Tìm tất cả các phần tử h3 chứa kết quả tìm kiếm
      const searchResults = await page.$$('h3');
      if (searchResults.length > 0) {
        // Click vào kết quả tìm kiếm đầu tiên
        await searchResults[0].click();
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
      } else {
        console.error('Không tìm thấy kết quả tìm kiếm.');
        return;
      }
  
      // Thực hiện scroll lên xuống trong 30 giây
      console.log('Bắt đầu scroll lên và xuống trong 30 giây...');
      const scrollDuration = 30000; // 30 giây
      const startTime = Date.now();
      let scrollDirection = 'down'; // Hướng scroll: xuống hoặc lên
  
      while (Date.now() - startTime < scrollDuration) {
        await page.evaluate((direction) => {
          if (direction === 'down') {
            window.scrollBy(0, 300); // Cuộn xuống 300px
          } else {
            window.scrollBy(0, -300); // Cuộn lên 300px
          }
        }, scrollDirection);
  
        // Đổi hướng scroll sau mỗi lần
        scrollDirection = scrollDirection === 'down' ? 'up' : 'down';
  
        // Nghỉ 0.5 giây giữa mỗi lần scroll
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      console.log('Scroll hoàn tất.');
    } catch (error) {
      console.error('Lỗi xảy ra:', error.message);
    } finally {
      // Đảm bảo đóng trình duyệt và page bất kể lỗi gì
      if (page) {
        await page.close();
      }
      if (browser) {
        await browser.close();
      }
    }
  }



  findAll() {
    return `This action returns all crawl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crawl`;
  }

  update(id: number, updateCrawlDto: UpdateCrawlDto) {
    return `This action updates a #${id} crawl`;
  }

  remove(id: number) {
    return `This action removes a #${id} crawl`;
  }
}
