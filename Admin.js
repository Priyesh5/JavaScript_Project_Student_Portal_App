class userData{
    constructor(){
        this.students = new Map();
    }
    checkAll(){
        var flag = 0;
        var a = document.getElementById('stdnameid').value;
        var b = document.getElementById('emailid').value;
        var c = document.getElementById('genderid').value;
        if(a==''){
            flag=1;
        }
        if(b == ''){
            flag=1;
        }
        if(c=='Select Gender'){
            flag=1;
        }
        if(flag==1){
            return false;
        }else{
            return true;
        }
    }
    getStudents(){
        return this.students;
    }
    addStudents(student){
        //console.log(student);
        var a=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
        }
        temp.set(++a,student);    
        
        this.saveCerToLocal(student);
        this.saveAchToLocal(student);
        return temp;
    }
    
    saveCerToLocal(student){
        var loccer = [];
        // loccer = student.certificates;
        for(var i=0; i<student.certificates.length ; i++){
            loccer[i] = student.certificates[i].toLowerCase() + 'cer';
            
            if(this.searchKey(loccer[i]) == true){
                var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[i])));
                for(let i of temp3.entries()){
                    a = i[0];
                }
                temp3.set(++a,student);
                this.saveFromKeyToLocal(temp3,loccer[i]);
            }
        }
        
    }
    saveAchToLocal(student){
        var locach = [];
        
        // loccer = student.certificates;
        for(var i=0; i<student.achievements.length ; i++){
            locach[i] = student.achievements[i].toLowerCase() + 'ach';
            if(this.searchKey(locach[i]) == true){
                var temp3 = new Map(JSON.parse(localStorage.getItem(locach[i])));
                for(let i of temp3.entries()){
                    a = i[0];
                }
                temp3.set(++a,student);
                this.saveFromKeyToLocal(temp3,locach[i]);
            }
        }
        
    }
    
    saveFromKeyToLocal(student,key){
        localStorage.setItem(key,JSON.stringify(Array.from(student)));
    }
    
    fromLocal(){
        let a = new Map(JSON.parse(localStorage.getItem('student')));
        
        return a;
    }
    
    saveToLocal(student){
        
        localStorage.setItem('student',JSON.stringify(Array.from(student)));
        
    }
    setStdCode(){
        var a=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
            var  n = parseInt(i[1].stdCode);
            
        }
        return ++n;
        
    }
    setStdCode1(str1){
        var d = new Date();
        var st = str1.toLowerCase().slice(0,3);
        var datestr = `${st}${d.getSeconds()}${d.getDate()}${d.getMonth() + 1}`;
        // var datestr = d.getHours() + d.getDate() + d.getMonth();
        //console.log(datestr);
        return datestr;
    }
    checkName(str){
        var a=0;
        var flag = 0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
            if(i[1].stdName == str){
                flag=1;
            }
            if(flag == 1){
                return true;
            }
        }
    }
    
    checkMail(str){
        var a=0;
        var flag = 0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
            
            if(i[1].email.toLowerCase() == str.toLowerCase()){
                flag=1;
            }
        }
        if(flag == 0){
            return true;
        }else{
            return false;
        }
    }
    
    delStudent(numkey){
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        this.delCerToLocal(numkey);
        this.delAchToLocal(numkey);
        for(let i of temp.entries()){
            if(i[0] == numkey){
                console.log(temp.delete(numkey));
            }
        }
        return temp;
    }
    delCerToLocal(numkey){
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        var loccer = [];
        
        for(let i of temp.entries()){
            
            //  debugger;
            if(i[0] == numkey){
                
                for(var x=0;x<i[1].certificates.length;x++){
                    
                    loccer[x] = i[1].certificates[x].toLowerCase() + 'cer';
                    if(this.searchKey(loccer[x])){
                        
                        var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[x])));
                        for(let j of temp3.entries()){
                            
                            if(i[1].stdCode == j[1].stdCode){
                                console.log(i[1].stdCode);
                                console.log(j[1].stdCode);
                                console.log(j[0]);
                                console.log(temp3.delete(j[0]));
                                this.saveFromKeyToLocal(temp3,loccer[x]);
                            }
                        }
                    }
                }
            }
        }
    }
    
    delAchToLocal(numkey){
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        var locach = [];
        
        for(let i of temp.entries()){
            
            if(i[0] == numkey){
                
                for(var x=0;x<i[1].achievements.length;x++){
                    
                    locach[x] = i[1].achievements[x].toLowerCase() + 'ach';
                    if(this.searchKey(locach[x])){
                        
                        var temp3 = new Map(JSON.parse(localStorage.getItem(locach[x])));
                        for(let j of temp3.entries()){
                            
                            if(i[1].stdCode == j[1].stdCode){
                                console.log(i[1].stdCode);
                                console.log(j[1].stdCode);
                                console.log(j[0]);
                                console.log(temp3.delete(j[0]));
                                this.saveFromKeyToLocal(temp3,locach[x]);
                            }
                        }
                    }
                }
            }
        }
    }
    getGender(){
        var gender = ['Male','Female','Other'];
        return gender;
    }
    getSearchCriteria(){
        var scriteria = ['Certificates','Achievements','View Complete Table'];
        return scriteria;
    }
    
    searchKey(getkey){
        for(i=0;i<localStorage.length;i++){
            if(getkey == localStorage.key(i)){
                
                return true;
            }
        }
        return false;
    }
    searchCer(txt){
        var flag = 0;
        var j=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        let temp2 = new Map();
        var getkey;
        if(txt == ''){
            getkey = 'nocer';
        }else{
            getkey = txt.toLowerCase() + "cer";
        }
        if(this.searchKey(getkey) == true ){
            
            temp2 = new Map(JSON.parse(localStorage.getItem(getkey)));
        }else{
            
            function func(t){
                console.log("inside fun");
                if(t.toLowerCase() == txt.toLowerCase()){
                    console.log("inside if");
                    flag=1;
                }
            }
            for(let i of temp.entries()){
                var arrcer = i[1].certificates;
                
                if(arrcer == '' && txt == ''){
                    temp2.set(++j,i[1]);
                    
                }
                arrcer.filter(func);
                if(flag == 1){
                    temp2.set(++j,i[1]);
                    flag=0;
                }
            }
            
            if(j!=0){
                var setkey;
                if(txt != ''){
                    setkey = txt.toLowerCase() + 'cer';
                }else{
                    setkey = 'nocer';
                }
                localStorage.setItem(setkey,JSON.stringify(Array.from(temp2)));
            }
        }     
        return temp2;    
    }    
    
    searchAch(txt){
        var flag = 0;
        var j=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        let temp2 = new Map();
        var getkey;
        if(txt == ''){
            getkey = 'noach';
        }else{
            getkey = txt.toLowerCase() + "ach";
        }
        if(localStorage.getItem(getkey) != null){
            temp2 = new Map(JSON.parse(localStorage.getItem(getkey)));
        }else{
            
            function func(t){
                if(t.toLowerCase() == txt.toLowerCase()){
                    flag=1;
                }
            }
            for(let i of temp.entries()){
                var arrach = i[1].achievements;
                arrach.filter(func);
                if(arrach == '' && txt == ''){
                    temp2.set(++j,i[1]);
                    
                }
                if(flag == 1){
                    temp2.set(++j,i[1]);
                    flag=0;
                }
            }
            
            if(j!=0){
                var setkey;
                if(txt != ''){
                    setkey = txt.toLowerCase() + 'ach';
                }else{
                    setkey = 'noach';
                }
                localStorage.setItem(setkey,JSON.stringify(Array.from(temp2)));
            }
        }
        return temp2;
    }
    
    checkOne(str){
        for(var i in str){
            if(str[i]==','){
                return false;
            }
        }
        return true;
    }
    checkFromArray(str,array){
        str = str.toLowerCase();
        var temparray = [];
        for(var i=0;i<array.length;i++){
            temparray[i] = array[i].toLowerCase();
        }
        if(temparray.indexOf(str) != -1){
            return false;
        }
        return true;
    }
}
