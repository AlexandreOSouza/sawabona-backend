import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";
import { User } from "./User";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  desc: string;
  @ManyToOne(() => Client, (client) => client.projects)
  client: Client;
  @ManyToMany(() => User, (user) => user.projects)
  @JoinTable()
  team: User[];
}
