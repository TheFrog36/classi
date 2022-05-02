class Student{
    constructor(name, surname, yob, gender, grades){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.grades = grades;
    }

    calculateGradesAvg(){
        let sum = 0;
        for(let i = 0; i < this.grades.length; i++){
            sum += this.grades[i];
        }
        return sum / this.grades.length
    }
    calculate_age(){
        const current_year = new Date()
        return current_year.getFullYear() - this.yob
    }
    //funzione che stampa le info dello studente
    toString(){
        const gender = this.gender === 'M' ? 'Maschio' : 'Femmina'
        const studentString = 'nome: '+ this.name + '\n' +
                              'cognome: ' + this.surname + '\n' +
                              'età: ' + this.calculate_age() + '\n' +
                              'genere: ' + gender 
        return studentString
    }
    //funzione che crea il testo HTML
}



class Athlete{
    //name
    //surname
    //yob
    //sport
    //palmares  array di posizioni
    //gender
    //isRetired
    
    //age()
    //bestResult()
    //toString()
}