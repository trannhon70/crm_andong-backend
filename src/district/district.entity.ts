import { City } from "src/city/city.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'district' })
export class District {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId:number;
    @ManyToOne(() => City, (city) => city.id)
    city: City;

    @Column()
    name: string;

    @Column()
    name_en: string;

    @Column()
    full_name: string;

    @Column()
    full_name_en: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    created_at: string;
}