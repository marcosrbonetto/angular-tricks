//fake service
export class AuthService{
    loggedIn=true;

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        return new Promise(
            (resolve,reject)=>{
                resolve(this.loggedIn);
        });
    }
}