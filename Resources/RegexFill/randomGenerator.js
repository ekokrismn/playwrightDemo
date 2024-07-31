class RandomGenerator {
    constructor() {
        this.firstNames = [
            "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
            "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen",
            "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra",
            "Paul", "Ashley", "Steven", "Dorothy", "Andrew", "Kimberly", "Kenneth", "Emily", "Joshua", "Donna",
            "Edward", "Carol", "Brian", "Ruth", "Ronald", "Sharon", "Kevin", "Michelle", "Jason", "Laura",
            "Gary", "Cynthia", "Timothy", "Amanda", "Jose", "Deborah", "Larry", "Stephanie", "Jeffrey", "Helen",
            "Frank", "Kathleen", "Scott", "Rebecca", "Eric", "Amy", "Stephen", "Anna", "Jerry", "Angela",
            "Raymond", "Marie", "Gregory", "Teresa", "Joshua", "Jacqueline", "Lawrence", "Gloria", "Ryan", "Janet",
            "Dennis", "Julie", "Walter", "Marilyn", "Patrick", "Carolyn", "Peter", "Christine", "Harold", "Joyce"
        ];

        this.lastNames = [
            "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Wilson", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White",
            "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall",
            "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson",
            "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres",
            "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook",
            "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard",
            "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James",
            "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales"
        ];

        this.emailFirstNames = [
            "john", "jane", "alex", "chris", "pat", "sam", "taylor", "morgan", "casey", "kelly",
            "michael", "sarah", "david", "emily", "joshua", "amanda", "daniel", "hannah", "andrew", "ashley",
            "joseph", "olivia", "matthew", "jessica", "nicholas", "lauren", "tyler", "samantha", "ryan", "megan",
            "james", "rachel", "justin", "stephanie", "anthony", "brittany", "jacob", "heather", "brandon", "elizabeth",
            "austin", "victoria", "zachary", "kimberly", "kyle", "amber", "kevin", "courtney", "benjamin", "nicole",
            "jason", "katherine", "christopher", "alexis", "brian", "rebecca", "steven", "alyssa", "thomas", "mary",
            "eric", "michelle", "charles", "erin", "nathan", "laura", "bradley", "christina", "patrick", "kaitlyn",
            "sean", "sophia", "gregory", "alicia", "kenneth", "madison", "jeremy", "sydney", "cody", "grace",
            "aaron", "kayla", "mark", "hailey", "jordan", "brooklyn", "adam", "maria", "richard", "gabrielle"
        ];

        this.emailLastNames = [
            "smith", "johnson", "williams", "jones", "brown", "davis", "miller", "wilson", "moore", "taylor",
            "anderson", "thomas", "jackson", "white", "harris", "martin", "thompson", "garcia", "martinez", "robinson",
            "clark", "rodriguez", "lewis", "lee", "walker", "hall", "allen", "young", "hernandez", "king",
            "wright", "lopez", "hill", "scott", "green", "adams", "baker", "gonzalez", "nelson", "carter",
            "mitchell", "perez", "roberts", "turner", "phillips", "campbell", "parker", "evans", "edwards", "collins",
            "stewart", "sanchez", "morris", "rogers", "reed", "cook", "morgan", "bell", "murphy", "bailey",
            "rivera", "cooper", "richardson", "cox", "howard", "ward", "torres", "peterson", "gray", "ramirez",
            "james", "watson", "brooks", "kelly", "sanders", "price", "bennett", "wood", "barnes", "ross",
            "henderson", "coleman", "jenkins", "perry", "powell", "long", "patterson", "hughes", "flores", "washington",
            "butler", "simmons", "foster", "gonzales", "bryant", "alexander", "russell", "griffin", "diaz", "hayes"
        ];

        this.domains = ["example", "test", "sample", "demo", "mock", "mail", "email", "web", "site", "page"];
        this.extensions = ["com", "net", "id"];
        this.departments = ["Developer", "QA", "PM", "QC", "SM", "FE", "BE", "Marketing"];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomFirstName() {
        return this.getRandomElement(this.firstNames);
    }

    getRandomLastName() {
        return this.getRandomElement(this.lastNames);
    }

    getRandomAge() {
        const minAge = 17;
        const maxAge = 55;
        return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
    }

    getRandomEmail() {
        const randomFirstName = this.getRandomElement(this.emailFirstNames);
        const randomLastName = this.getRandomElement(this.emailLastNames);
        const randomDomain = this.getRandomElement(this.domains);
        const randomExtension = this.getRandomElement(this.extensions);

        return `${randomFirstName}.${randomLastName}@${randomDomain}.${randomExtension}`;
    }

    getRandomSalary() {
        const minSalary = 5000000;
        const maxSalary = 10000000;
        return Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    }

    getRandomDepartment() {
        return this.getRandomElement(this.departments);
    }
}

// Contoh penggunaan
const generator = new RandomGenerator();

// console.log(generator.getRandomFirstName());  // Fungsi untuk generate Nama Depan
// console.log(generator.getRandomLastName());   // Fungsi untuk generate Nama Belakang
// console.log(generator.getRandomAge());        // Fungsi untuk generate Umur
// console.log(generator.getRandomEmail());      // Fungsi untuk generate Email
// console.log(generator.getRandomSalary());     // Fungsi untuk generate Gaji
// console.log(generator.getRandomDepartment()); // Fungsi untuk generate Departemen

module.exports = RandomGenerator;
