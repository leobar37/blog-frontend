
export class login {
    private email: string ;
    private password : string ;
    private user : string ; 
    private recuerdame : boolean;

    constructor(email:string , password:string , recuerdame:boolean) {
           this.email = email;
           this.password= password ;
         this.recuerdame = recuerdame;
     }
     public setUser(user : string) {
         this.user = user;
     }
     
          
     public getEmail() : string {
      return this.email;
     };
     
     public getPassword() : string {
         return this.password;
     }
     
     public getUser() : string {
         return  this.user; 
        }
        
        
        
        public getRecuerdame() : boolean {
            return this.recuerdame;
        }
        
}