import { NextFunction, Request, Response } from "express";
import { SystemVac } from "../entity/SystemVac";
import { UserVac } from "../entity/UserVac";
import { AppDataSource } from "../data-source";

export class SystemVacController {  
  private SystemVacRepository = AppDataSource.getRepository(SystemVac);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.SystemVacRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const id = request.params
    const user = await AppDataSource.getRepository(SystemVac).findOneBy(id)
    return response.json (user)    
}

  async save(request: Request, response: Response, next: NextFunction) {
    return this.SystemVacRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params
    const user = await AppDataSource.getRepository(SystemVac).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(SystemVac).findOneBy(id)
        response.json(userUpdated)
    }
} 
  
async remove(request: Request, response: Response, next: NextFunction) {

    const produto = request.params
        const user = await AppDataSource.getRepository(SystemVac).delete(produto)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(SystemVac).findOneBy(produto)
            response.json(userUpdated)
            }}
            
}


export class UserVacController {
  private UserVacRepository = AppDataSource.getRepository(UserVac);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.UserVacRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const cod = request.params
    const user = await AppDataSource.getRepository(UserVac).findOneBy(cod)
    return response.json (user)    
}
 async save(request: Request, response: Response, next: NextFunction) { 

 
    const user = await AppDataSource.getRepository(UserVac).save(request.body)
return response.json(user)
}



  async update(request: Request, response: Response, next: NextFunction) {
    const cod = request.params
    const user = await AppDataSource.getRepository(UserVac).update(cod,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserVac).findOneBy(cod)
        response.json(userUpdated)
    }
}
async remove(request: Request, response: Response, next: NextFunction) {

const usuario = request.params
    const user = await AppDataSource.getRepository(UserVac).delete(usuario)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserVac).findOneBy(usuario)
        response.json(userUpdated) 
           

    
    }
  
}

}
