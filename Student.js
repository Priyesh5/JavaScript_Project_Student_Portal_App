class studentUserData{
    constructor(){
        this.students = new Map();
    }
    getStudents(){
        return this.students;
    }
    fromLocal(){
        let a = new Map(JSON.parse(localStorage.getItem('student')));
        //console.log(a);
        return a;
    }
    getIndividual(){
        var temp = new Map(JSON.parse(localStorage.getItem('student')));
        var indpass = localStorage.getItem('passwordind');
        for(let i of temp.entries()){
            if(i[1].stdCode == indpass){
                //console.log(i[0]);
                return i[0];
            }
        }
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
            
           // debugger;
            if(student.stdCode == i[1].stdCode){
                retcer = i[1].certificates;
                retach = i[1].achievements;
                i[1].address = student.address;
                i[1].certificates = student.certificates;
                i[1].achievements = student.achievements;
            }
        }
        this.saveCerToLocal(student,retcer);
        this.saveAchToLocal(student,retach);
        return temp;
    }

    saveCerToLocal(student,A){
    //    debugger;
        var temp3;
        var tempStdCode = -1;
        var loccer = [];
        var k =0;
        var a=0;
        for(var j=0;j<A.length || k<student.certificates.length;j++){
            if(A.length == 0){
                A[j] = 'nocer';
            }else if(j<A.length){
                A[j] = A[j].toLowerCase() + 'cer';
            }

            if(this.searchKey(A[j]) == true){
                
                temp3 = new Map(JSON.parse(localStorage.getItem(A[j])));
                for(let i of temp3.entries()){

                    if(student.stdCode == i[1].stdCode){
                        tempStdCode = i[0];
                        
                        console.log(temp3.delete(i[0]));
                        
                    }
                }
                this.saveFromKeyToLocal(temp3,A[j]);
                
            }
            
            
            if(student.certificates.length == 0){
                loccer[k] == 'nocer';
            }else if(k < student.certificates.length){
                loccer[k] = student.certificates[k].toLowerCase() + 'cer';
            }
            if(this.searchKey(loccer[k]) == true){
                temp3= new Map(JSON.parse(localStorage.getItem(loccer[k])));
                if(tempStdCode != -1){
                    temp3.set(tempStdCode,student);
                }else{
                    for(let i of temp3.entries()){
                        a = i[0];
                    }
                    temp3.set(++a,student);
                    
                }
                this.saveFromKeyToLocal(temp3,loccer[k]);
                
            }
            k++;
        }
    }
    
    saveAchToLocal(student,A){
        
        var temp3;
        var tempStdCode = -1;
        var locach = [];
        var k =0;
        var a=0;
        for(var j=0;j<A.length || k<student.achievements.length;j++){
            if(A.length == 0){
                A[j] = 'noach'
            }else if(j<A.length){
                console.log(A.length);
                A[j] = A[j].toLowerCase() + 'ach';
            }
            if(this.searchKey(A[j]) == true){
                temp3 = new Map(JSON.parse(localStorage.getItem(A[j])));
                for(let i of temp3.entries()){
                    if(student.stdCode == i[1].stdCode){
                        tempStdCode = i[0];
                        
                        console.log(temp3.delete(i[0]));
                        
                    }
                }
                this.saveFromKeyToLocal(temp3,A[j]);
                
            }
            
            if(student.achievements.length == 0){
                
                locach[k] = 'noach';
            }else if(k<student.achievements.length){
                locach[k] = student.achievements[k].toLowerCase() + 'ach';
            }
            if(this.searchKey(locach[k]) == true){
                temp3= new Map(JSON.parse(localStorage.getItem(locach[k])));
                if(tempStdCode != -1){
                    temp3.set(tempStdCode,student);
                    
                }else{
                    for(let i of temp3.entries()){
                        a = i[0];
                    }
                    temp3.set(++a,student);
                }
                this.saveFromKeyToLocal(temp3,locach[k]);
            }
            k++;
            
        }
        
    }
    
    saveFromKeyToLocal(student,key){
        localStorage.setItem(key,JSON.stringify(Array.from(student)));
    }
    
    searchKey(getkey){
        for(var i=0;i<localStorage.length;i++){
            if(getkey == localStorage.key(i)){
                return true;
            }
        }
        return false;
    }
    
    addStudents(student){
        //console.log(student);
        var a=0;
        let temp = new Map(JSON.parse(localStorage.getItem('student')));
        for(let i of temp.entries()){
            a = i[0];
        }

        temp.set(++a,student);    
        return temp;
    }
    saveToLocal(student){
        
        localStorage.setItem('student',JSON.stringify(Array.from(student)));
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