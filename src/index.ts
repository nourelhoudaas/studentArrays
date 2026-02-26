type student = {
  id: number;
  name: string;
  active: boolean;
};

const students: Student[] = [
  { id: 1, name: "Nour", active: true },
  { id: 2, name: "houda", active: false },
  { id: 3, name: "sayah", active: true },
];

//Fonction pour récupérer les étudiants actifs
function getActiveStudents(arr: Student[]): Student[] {
  return arr.filter((student) => student.active);
}

//Fonction pour chercher un étudiant par id
//Si aucun étudiant n’est trouvé → retourne undefined
function findStudentById(arr: Student[], id: number): Student | undefined {
  return arr.find((student) => student.id === id);
}

console.log("Tous les students :", students);

console.log("students actifs :", getActiveStudents(students));

console.log("student avec id = 2 :", findStudentById(students, 2));

console.log("student avec id = 5 :", findStudentById(students, 5)); // undefined
