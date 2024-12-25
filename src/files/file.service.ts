import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Repository } from "typeorm";
import { Files } from "./file.entity";
import * as fs from 'fs';
import * as path from 'path';


export class FileService {
    constructor(
        @InjectRepository(Files)
        private readonly fileRepository: Repository<Files>,
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        private readonly jwtService: JwtService
    ) { }

    async getpaging(req: any, query: any) {}

    async delete(req: any, id: any) {
        if (id) {
            // Tìm thông tin file trong database
            const check = await this.fileRepository.findOne({
                where: { id }
            });
    
            if (check && check.name) {
                // Đường dẫn tới file trong thư mục uploads
                const filePath = path.join(process.cwd(), 'uploads', check.name);
    
                // Kiểm tra file có tồn tại không
                if (fs.existsSync(filePath)) {
                    // Xóa file
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Lỗi khi xóa file:', err);
                        } else {
                            console.log('Đã xóa file:', filePath);
                        }
                    });
                    return await this.fileRepository.delete(id)
                } else {
                    console.log('File không tồn tại:', filePath);
                }
            } else {
                console.log('Không tìm thấy file trong database hoặc thiếu thuộc tính name');
            }
        } else {
            console.log('Thiếu id');
        }
    }

}