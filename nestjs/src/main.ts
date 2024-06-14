import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;

  await app.listen(PORT).then(()=>{
    console.log(`Server running at http://localhost:${PORT}`)
  }).catch((err)=>{
    console.log(`error:${err}`)
  })
}
bootstrap()