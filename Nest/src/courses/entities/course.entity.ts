import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "courses" })
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "id_category" })
  id_category: number;
}
