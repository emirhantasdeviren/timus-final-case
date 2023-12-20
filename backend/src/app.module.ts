import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoriesModule } from './factories/factories.module';
import { LogsModule } from './logs/logs.module';
import { FactoryDetailsModule } from './factory-details/factory-details.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'database',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'factory',
            entities: [],
            autoLoadEntities: true,
            synchronize: true,
        }),
        LogsModule,
        FactoriesModule,
        FactoryDetailsModule,
    ],
})
export class AppModule {}

