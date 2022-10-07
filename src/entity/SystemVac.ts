import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SystemVac {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nome: string

    @Column()
    Quantidade: number

    @Column()
    Cor: string

    @Column()
    Preco: number
    
}