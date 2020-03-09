class studentUserData{
    constructor(){
        this.students = new Map();
    }
    getStudents(){
        return this.students;
    }
    fromLocal(){
        let a = new Map(JSON.parse(localStorage.getItem('student')));
        console.log(a);
        return a;
    }
    getIndividual(){
        var temp = new Map(JSON.parse(localStorage.getItem('student')));
        var indpass = localStorage.getItem('passwordind');
        for(let i of temp.entries()){
            if(i[1].stdCode == indpass){
                console.log(i[0]);
                return i[0];
            }
        }
        // var a=0;
        // let temp = new Map(JSON.parse(localStorage.getItem('student')));
        // for(let i of temp.entries()){
        //     a = i[0];
        //     var  n = parseInt(i[1].stdCode);
        //     console.log(i[1]);
        //     console.log("See this " + i[1].stdCode + typeof(i[1].stdCode));
    }
    
    checkOne(str){
        for(var i in str){
            if(str[i]==','){
                return false;
            }
        }
        return true;
    }
    updateStudents(student){
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        var retcer = [];
        var retach = [];
        for(let i of temp.entries()){
            console.log(student.stdCode);
            console.log(student.stdCode);
            console.log(i[1].stdCode);
           // debugger;
            if(student.stdCode == i[1].stdCode){
                console.log("inside");
                debugger;
                retcer = i[1].certificates;
                retach = i[1].achievements;
                i[1].address = student.address;
                i[1].certificates = student.certificates;
                i[1].achievements = student.achievements;
                console.log("Changed add" + i[1].address);
            }
        }
        this.saveCerToLocal(student,retcer);
        this.saveAchToLocal(student,retach);
        return temp;
    }
    
    //    delCerFromLocal(student,A){
    //         var loccer = [];
    //         // loccer = student.certificates;
    //         console.log("This isA " + A);
    //         console.log(student.certificates);
    //         for(var i=0; i<A.length ; i++){
    //             console.log(A[i]);
    //             loccer[i] = A[i] + 'cer';
    //             console.log(loccer);
    //             if(this.searchKey(loccer[i]) == true){
    //                 console.log("key is found");
    //                 var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[i])));
    //                 for(let i of temp3.entries()){
    //                     //   a = i[0];
    //                     if(i[1].stdCode == student.stdCode){
    //                         console.log(i[1].stdCode + " is dleted" + i[0]);
    //                         temp3.delete(i[0]);
    //                     }
    //                 }
    //                 // temp3.set(++a,student);
    //                 this.saveFromKeyToLocal(temp3,loccer[i]);
    //                 debugger;
    //             }
    //         }
    //         console.log("Loccer - " + loccer); 
    //     }
    // deleting(student,element){
    //     element = element + 'cer';
    //     if(this.searchKey(element) == true){
    //         console.log("Key found");
    //         var temp3 = new Map(JSON.parse(localStorage.getItem(element)));
    //         for(let i of temp3.entries()){
    //             if(i[1].stdCode == student.stdCode){
    //                 console.log(i[1].stdCode + " is dleted" + i[0]);
    //                 temp3.delete(i[0]);
    //             }
    //         }
    //         this.saveFromKeyToLocal(temp3,loccer[i]);
    //             debugger;
    //     }
    // }
    saveCerToLocal(student,A){
        debugger;
        var temp3;
        var tempStdCode = -1;
        var loccer = [];
        var k =0;
        var a=0;
        for(var j=0;j<A.length || k<student.certificates.length;j++){
            if(A.length == 0){
                A[j] = 'nocer';
            }else{
                A[j] = A[j].toLowerCase() + 'cer';
            }
            console.log("Inisde");
            console.log(A[j]);
            if(this.searchKey(A[j]) == true){
                console.log(A[j]);
                temp3 = new Map(JSON.parse(localStorage.getItem(A[j])));
                for(let i of temp3.entries()){
                    console.log(i[1]);
                    //console.log(student);
                    if(student.stdCode == i[1].stdCode){
                        tempStdCode = i[0];
                        console.log(i[0] + "  " + i[1].stdCode);
                        debugger;
                        console.log(temp3.delete(i[0]));
                        debugger;
                    }
                }
                this.saveFromKeyToLocal(temp3,A[j]);
                debugger;
            }
            console.log(student.certificates);
            debugger;
            if(student.certificates.length == 0){
                console.log("inside");
                debugger;
                loccer[k] == 'nocer';
            }else{
                loccer[k] = student.certificates[k].toLowerCase() + 'cer';
            }
            if(this.searchKey(loccer[k]) == true){
                console.log("Loccer" + loccer[k]);
                temp3= new Map(JSON.parse(localStorage.getItem(loccer[k])));
                if(tempStdCode != -1){
                    temp3.set(tempStdCode,student);
                    debugger;
                }else{
                    for(let i of temp3.entries()){
                        a = i[0];
                    }
                    temp3.set(++a,student);
                    debugger;
                }
                console.log("---------" + tempStdCode)
                this.saveFromKeyToLocal(temp3,loccer[k]);
                debugger;
            }
            k++;
        }
    }
    
    saveAchToLocal(student,A){
        debugger;
        var temp3;
        var tempStdCode = -1;
        var locach = [];
        var k =0;
        var a=0;
        for(var j=0;j<A.length || k<student.achievements.length;j++){
            if(A.length == 0){
                A[j] = 'noach'
            }else{
                A[j] = A[j].toLowerCase() + 'ach';
            }
            console.log("Inisde");
            console.log(A[j]);
            if(this.searchKey(A[j]) == true){
                console.log(A[j]);
                temp3 = new Map(JSON.parse(localStorage.getItem(A[j])));
                for(let i of temp3.entries()){
                    console.log(i[1]);
                    //console.log(student);
                    if(student.stdCode == i[1].stdCode){
                        tempStdCode = i[0];
                        console.log(i[0] + "  " + i[1].stdCode);
                        debugger;
                        console.log(temp3.delete(i[0]));
                        debugger;
                    }
                }
                this.saveFromKeyToLocal(temp3,A[j]);
                debugger;
            }
            console.log(student.achievements);
            debugger;
            if(student.achievements.length == 0){
                console.log("inside");
                debugger;
                locach[k] = 'noach';
            }else{
                locach[k] = student.achievements[k].toLowerCase() + 'ach';
            }
            if(this.searchKey(locach[k]) == true){
                console.log("Locach" + locach[k]);
                temp3= new Map(JSON.parse(localStorage.getItem(locach[k])));
                if(tempStdCode != -1){
                    temp3.set(tempStdCode,student);
                    debugger;
                }else{
                    for(let i of temp3.entries()){
                        a = i[0];
                    }
                    temp3.set(++a,student);
                    debugger;
                }
                console.log("---------" + tempStdCode)
                this.saveFromKeyToLocal(temp3,locach[k]);
                debugger;
            }
            k++;
            
        }
        
    }
    // for(var j=0;j<student.certificates.length; j++){
    //     loccer[j] = student.certificates[j] + 'cer';
    //     if(this.searchKey(loccer[j]) == true){
    //         console.log("Loccer" + loccer[j]);
    //         temp3= new Map(JSON.parse(localStorage.getItem(loccer[j])));
    //         if(tempStdCode != -1){
    //             temp3.set(tempStdCode,student);
    //             debugger;
    //         }else{
    //             for(let i of temp3.entries()){
    //                 a = i[0];
    //             }
    //             temp3.set(++a,student);
    //             debugger;
    //         }
    //     this.saveFromKeyToLocal(temp3,loccer[j]);
    //     debugger;
    // }
    
    //}
    
    // saveCerToLocal(student,A){
    //     var flag = 0;
    //     console.log(A);//azure
    //     console.log(student.certificates);//azure,aws
    //     debugger;
    //     // for(var i=0; i<A.length ; i++){
    //     //     for(var j=0; j<student.certificates.length; j++){
    //     //         if(student.certificates[j] != A[i]){ //azure != azure, aws!=azure
    //     //             console.log(A[i]);//-//azure
    //     //             debugger;
    //     //             this.deleting(student,A[i]);//azure
    //     //            // flag=1;
    //     //         }
    //     //     }
    //     // };
    //     // if(flag == 0){
    //     //     this.delCerFromLocal(student,A);
    //     // }
    
    //     var loccer = [];
    //     // loccer = student.certificates;
    //     console.log(student.certificates);
    //     for(var i=0; i<student.certificates.length ; i++){
    //         console.log(student.certificates[i]);
    //         loccer[i] = student.certificates[i] + 'cer';
    //         console.log(loccer);
    //         if(this.searchKey(loccer[i]) == true){
    //             console.log("key is found");
    //             var temp3 = new Map(JSON.parse(localStorage.getItem(loccer[i])));
    //             for(let i of temp3.entries()){
    //                 //   a = i[0];
    //                 if(i[1].stdCode == student.stdCode){
    //                     i[1].certificates = student.certificates;
    //                 }
    //             }
    //             // temp3.set(++a,student);
    //             this.saveFromKeyToLocal(temp3,loccer[i]);
    //             debugger;
    //         }
    //     }
    //     console.log("Loccer - " + loccer);    
    // }
    
    // saveAchToLocal(student){
    //     var locach = [];
    //     var a;
    //     console.log('inside locach');
    //     // loccer = student.certificates;
    //     for(var i=0; i<student.achievements.length ; i++){
    //         locach[i] = student.achievements[i] + 'ach';
    //         if(this.searchKey(locach[i]) == true){
    //             console.log("key is found");
    //             var temp3 = new Map(JSON.parse(localStorage.getItem(locach[i])));
    //             for(let i of temp3.entries()){
    //                 //   a = i[0];
    //                 if(i[1].stdCode == student.stdCode){
    //                     i[1].achievements = student.achievements;
    //                 }
    //             }
    //             //      temp3.set(++a,student);
    //             this.saveFromKeyToLocal(temp3,locach[i]);
    //         }
    //     }
    //     console.log("Locach - " + locach);    
    // }
    
    saveFromKeyToLocal(student,key){
        localStorage.setItem(key,JSON.stringify(Array.from(student)));
    }
    
    searchKey(getkey){
        for(var i=0;i<localStorage.length;i++){
            console.log(localStorage.key(i));
            console.log("This is getKey" + getkey);
            console.log(getkey);
            if(getkey == localStorage.key(i)){
                console.log("inside getkey fn");
                return true;
            }
        }
        return false;
    }
    
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
        return temp;
    }
    saveToLocal(student){
        console.log(typeof(student));
        console.log(student);
        //   this.students.set(student);
        console.log("Print" + this.students.size);
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
    
}