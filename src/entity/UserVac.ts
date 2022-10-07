import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserVac {

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
