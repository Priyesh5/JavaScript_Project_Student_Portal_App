var Userclass = function(){
    let users = new Map();
    users.set(1, {user:'Priyesh', role:'Admin',pass:'PS12345'});
    users.set(2, {user:'Mahesh', role:'Admin',pass:'MA12345'});

    this.valid = function(arr){
        var flag = 0; 
        if(arr[1].toLowerCase()=='admin'){
            for(var i=1; i<=users.size; i++){
                if(users.get(i).user == arr[0]){
                    if(users.get(i).role == arr[1]){
                        if(users.get(i).pass == arr[2]){
                            console.log("Find user at " + i + " position.");
                            flag=1;
                            break;
                        }
                    }
                }
            }
        }
        else if(arr[1].toLowerCase() == 'student'){
            let temp = new Map(JSON.parse(localStorage.getItem('student')));
            for(let i of temp.entries()){
        //     a = i[0];
                if(i[1].stdName.toLowerCase() == arr[0].toLowerCase()){
                    if(i[1].role.toLowerCase() == arr[1].toLowerCase()){
                        if(i[1].stdCode == arr[2]){
                            flag = 2;
                            break;
                        }
                    }
                }
            }
        }
        if(flag==1){
            return 1;
        }else if(flag==2){
            return 2;
        }else{
            return 0;
        }
    };

    this.setPassword = function(arr){
        localStorage.setItem('passwordind',arr[2]);
    }
    this.setData = function(){
        localStorage.setItem('userKey',JSON.stringify(Array.from(users.entries())));
        console.log("printing Array");
       // debugger;
    };

    this.getData = function(){
        let toCheckData = new Map(JSON.parse(localStorage.getItem('userKey')));
        console.log("This is to check : " + toCheckData.get(1).role);
        //debugger;
    }
}
