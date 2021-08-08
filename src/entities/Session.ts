import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity('sessions')
export default class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    userId: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}