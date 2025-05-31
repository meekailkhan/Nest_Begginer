import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: "Amit Sharma",
            email: "amit.sharma@example.com",
            role : "INTERN",
          },
          {
            id: 2,
            name: "Priya Verma",
            email: "priya.verma@example.com",
            role : "ADMIN",
          },
          {
            id: 3,
            name: "Rahul Mehta",
            email: "rahul.mehta@example.com",
            role : "INTERN",
          },
          {
            id: 4,
            name: "Sneha Kapoor",
            email: "sneha.kapoor@example.com",
            role : "ENGINEER",
          },
          {
            id: 5,
            name: "Vikram Singh",
            email: "vikram.singh@example.com",
            role : "ENGINEER",
          }
    ]

    findAll(role? : "INTERN" | "ENGINEER" | "ADMIN"){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(createUserDto: CreateUserDto){
        const userByHighestId = [...this.users].sort((a,b)=> b.id - a.id);

        const newUser = {
          id : userByHighestId[0].id + 1,
          ...createUserDto
        }
        this.users.push(newUser);
        return newUser
    }

    update(id:number,updateUserDto: UpdateUserDto){
      this.users = this.users.map(user => {
        if(id === user.id){
          return { ...user, ...updateUserDto }
        }
        return {...user}
      })
      return this.findOne(id)
    }

    dele(id:number){
      this.users = this.users.filter(item => item.id !== id)
      return this.users
    }

}
