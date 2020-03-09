//class user{
//     constructor(){
//         this.stdCode = "";
//         this.stdName = "";
//         this.gender = "";
//         this.email = "";
//         this.address = "";
//         this.certificates = [];
//         this.achievements = [];
//     }
// }

class userData{
    constructor(){
        this.students = new Map();
        //this.key = ['StudentCode', 'StudentName','Gender','Email','Address','Certificates','Achievements'];
        // this.students.set(1,{
        //     stdCode : 101,
        //     stdName : "PS",
        //     gender : "Male",
        //     email : "ps@blaze.com",
        //     address : "K-502, Shivaji Nagar",
        //     certificates : ['AWS SA'],
        //     achievements : ['District level Basketball'] 
        // })
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
    // saveToLocalFirst(){
    //     localStorage.setItem('student1',JSON.stringify(Array.from(this.students)));
    // }
    addStudents(student){
        console.log(student);
        var a=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
        }
        //    console.log("whats this" + ++a)
        console.log("A is " + a);
        temp.set(++a,student);    
        console.log("INside new" + temp.size + "   " + temp);
        this.saveCerToLocal(student);
        this.saveAchToLocal(student);
        return temp;
    }
    
    saveCerToLocal(student){
        var loccer = [];
        // loccer = student.certificates;
        for(var i=0; i<student.certificates.length ; i++){
            loccer[i] = student.certificates[i].toLowerCase() + 'cer';
            console.log("its imp ----" + loccer);
            if(this.searchKey(loccer[i]) == true){
                console.log("key is found");
                var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[i])));
                for(let i of temp3.entries()){
                    a = i[0];
                }
                temp3.set(++a,student);
                this.saveFromKeyToLocal(temp3,loccer[i]);
            }
        }
        console.log("Loccer - " + loccer);    
    }
    saveAchToLocal(student){
        var locach = [];
        console.log('inside locach');
        // loccer = student.certificates;
        for(var i=0; i<student.achievements.length ; i++){
            locach[i] = student.achievements[i].toLowerCase() + 'ach';
            if(this.searchKey(locach[i]) == true){
                console.log("key is found");
                var temp3 = new Map(JSON.parse(localStorage.getItem(locach[i])));
                for(let i of temp3.entries()){
                    a = i[0];
                }
                temp3.set(++a,student);
                this.saveFromKeyToLocal(temp3,locach[i]);
            }
        }
        console.log("Locach - " + locach);    
    }
    
    saveFromKeyToLocal(student,key){
        localStorage.setItem(key,JSON.stringify(Array.from(student)));
    }
    
    fromLocal(){
        let a = new Map(JSON.parse(localStorage.getItem('student')));
        console.log(typeof(a));
        // for(let i of a.entries()){
        //     console.log(i[1].stdCode);
        // }
        // console.log(a.get(1));
        // console.log(a[0]);
        return a;
    }
    
    saveToLocal(student){
        console.log(typeof(student));
        console.log(student);
        //   this.students.set(student);
        //console.log("Print" + this.students.size);
        // var abc;
        // if(localStorage.getItem('student')==''){
        //     abc = localStorage.getItem('student');
        // }
        localStorage.setItem('student',JSON.stringify(Array.from(student)));
        // abc = new Map(JSON.parse(localStorage.getItem('student')));
        // console.log(abc);
        // abc.set(student);
        // console.log(localStorage.setItem('student',JSON.stringify(abc)));
    }
    setStdCode(){
        var a=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
            var  n = parseInt(i[1].stdCode);
            console.log("See this " + i[1].stdCode + typeof(i[1].stdCode));
        }
        console.log(n);
        return ++n;
        // var a=0;
        // for(let i of this.students.entries()){
        //     a = i[0];
        // }
        // a = a+100;
        // console.log("KYA h" + a);
        // return ++a;
    }
    setStdCode1(str1){
        var d = new Date();
        var st = str1.toLowerCase().slice(0,3);
        var datestr = `${st}${d.getSeconds()}${d.getDate()}${d.getMonth() + 1}`;
        // var datestr = d.getHours() + d.getDate() + d.getMonth();
        console.log(datestr);
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
            console.log(i[1].email);
            if(i[1].email.toLowerCase() == str.toLowerCase()){
                flag=1;
            }
        }
        if(flag == 0){
            console.log("true");
            return true;
        }else{
            console.log("not true");
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
        console.log("Inside cer delete");
        for(let i of temp.entries()){
            console.log("Key " + numkey);
            console.log("Key " + i[0]);
            debugger;
            if(i[0] == numkey){
                console.log("inside delete loccer");
                for(var x=0;x<i[1].certificates.length;x++){
                    console.log("Inside second for");
                    loccer[x] = i[1].certificates[x].toLowerCase() + 'cer';
                    if(this.searchKey(loccer[x])){
                        console.log("KEy fpor delete is found");
                        var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[x])));
                        for(let j of temp3.entries()){
                            console.log("Inside 3rd for");
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
        console.log("Inside ach delete");
        for(let i of temp.entries()){
            console.log("Key " + numkey);
            if(i[0] == numkey){
                console.log("inside delete locach");
                for(var x=0;x<i[1].achievements.length;x++){
                    console.log("Inside second for");
                    locach[x] = i[1].achievements[x].toLowerCase() + 'ach';
                    if(this.searchKey(locach[x])){
                        console.log("KEy for delete is found");
                        var temp3 = new Map(JSON.parse(localStorage.getItem(locach[x])));
                        for(let j of temp3.entries()){
                            console.log("Inside 3rd for");
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
            console.log(localStorage.key(i));
            console.log(getkey);
            if(getkey == localStorage.key(i)){
                console.log("inside getkey fn");
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
            console.log("Inside no search");
            temp2 = new Map(JSON.parse(localStorage.getItem(getkey)));
        }else{
            console.log("inside search");
            console.log(txt);
            function func(t){
                // console.log("jbkjd ==== " + t);
                console.log("inside fun");
                // console.log("jbkjd ==== " + txt);
                if(t.toLowerCase() == txt.toLowerCase()){
                    console.log("inside if");
                    flag=1;
                }
            }
            for(let i of temp.entries()){
                var arrcer = i[1].certificates;
                console.log("Arrcer" + arrcer);
                if(arrcer == '' && txt == ''){
                    temp2.set(++j,i[1]);
                    console.log("ok");
                }
                arrcer.filter(func);
                if(flag == 1){
                    temp2.set(++j,i[1]);
                    flag=0;
                }
            }
            console.log("->" + temp2);
            if(j!=0){
                var setkey;
                console.log("      " + j);
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
        console.log("see this" + document.getElementById('searchtxtid').value);
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
            console.log("Inside no search");
            temp2 = new Map(JSON.parse(localStorage.getItem(getkey)));
        }else{
            console.log(txt);
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
                    console.log("ok");
                }
                if(flag == 1){
                    temp2.set(++j,i[1]);
                    flag=0;
                }
            }
            console.log("->" + temp2);
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
    // savePerson(person){
    //     var a=0;
    //     for(let i of this.students.entries()){
    //         a = i[0];
    //     }
    //     console.log("conmtrol");
    //     console.log("person - > " + person);
    //     this.students.set(++a,person);
    //     console.log(this.students.values);
    //     return person;
    // };
}
