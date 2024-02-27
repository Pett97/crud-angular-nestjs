import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"category"})
export class Category {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"name"})
    name:string;
}
