import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Project } from "./Project";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @ManyToMany(() => Project, (project) => project.team)
  projects: Project[];
}
