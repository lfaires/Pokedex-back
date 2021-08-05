import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pokemons')
export default class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('integer')
    number: number;

    @Column('text')
    image: string;

    @Column('integer')
    height: number;

    @Column('integer')
    weigth: number;

    @Column('integer')
    baseExp: number;

    @Column('text')
    description: string
}