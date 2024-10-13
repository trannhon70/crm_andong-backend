import { InjectRepository } from "@nestjs/typeorm";
import { City } from "./city.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { currentTimestamp } from "utils/currentTimestamp";

export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepository: Repository<City>,
       
        private readonly jwtService: JwtService
    ) { }

    async create(req: any, body: any) {
        try {
            // const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
            // if (!response.ok) {
            //   throw new Error('Network response was not ok');
            // }
            // const data = await response.json();
            // const result = data.data
            // const cities = result.map((city: any) => {
            //     return {
            //       id_code: Number(city.id),
            //       name: city.name,
            //       name_en: city.name_en,
            //       full_name: city.full_name,
            //       full_name_en: city.full_name_en,
            //       latitude: city.latitude,
            //       longitude: city.longitude,
            //       created_at: currentTimestamp(), // Thay thế currentTimestamp bằng thời gian hiện tại
            //     };
            //   });
          
            //   // Sử dụng cityRepository để lưu tất cả các bản ghi
            //   const savedCities = await this.cityRepository.save(cities); // Lưu mảng các thành phố
            //   return savedCities;
            
          } catch (error) {
            console.error('Error fetching cities:', error);
          }
    }

    async getAll () {
        try {
            const reuslt  = await this.cityRepository.find()
            return reuslt
        } catch (error) {
            console.log(error);
            
        }
    }
}
