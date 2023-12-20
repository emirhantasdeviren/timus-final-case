import { Factory } from 'src/factories/factory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactoryDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departmant: string;

    @Column({ type: 'timestamptz' })
    start: Date;

    @Column({ type: 'timestamptz' })
    end: Date;

    @Column({ type: 'real' })
    cost: number;

    @Column()
    discount: boolean;

    @ManyToOne(() => Factory, (factory) => factory.details, {
        onDelete: 'CASCADE',
    })
    factory: Factory;
}
