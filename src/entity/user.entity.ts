import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    name: string;

    @Column()
    age:Number;

    @Column()
    address:String;
}

