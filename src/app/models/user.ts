export class User {

  constructor( public _id:string,
               public email:string,
               public isTeacher:boolean,
               public schoolId:string,
               public classId:string
                ){
    
  }
}
