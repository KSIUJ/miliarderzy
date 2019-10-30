var questions = [
    {
        text: "Ile bajtów ma kilobajt?",
        answers: ["1024", "1000", "miliard", "8"],
        correct: '1024'
    },
    {
        text: "Ile bajtów ma megabajt?",
        answers: ["1048576", "miliard", "1024", "1000"],
        correct: '1048576'
    },
    {
        text: "Ile bajtów ma bit?",
        answers: ["1/8", "8", "1024", "128"],
        correct: "1/8"
    },
    {
        text: "Co to jest ZIP?",
        answers: ["format kompresji", "format obrazka", "format dokumentu", "plik wykonywalny"],
        correct: "format kompresji"
    },
    //{text: "Ile lat ma KSI?", answers: ["41","16","100","40"]},
    {
        text: "Jakim skrótem klawiaturowym możesz cofnąć ostatnią zmianę?",
        answers: ["Ctrl+Z", "Ctrl+Y", "Ctrl+B", "Ctrl+Alt+Del"],
        correct: "Ctrl+Z"
    },
    {
        text: "Jakim poleceniem można wydrukować określony komunikat na ekran w konsoli linuksowej?",
        answers: ["echo", "ls", "dir", "send"],
        correct: "echo"
    },
    {
        text: "Kiedy odbywa się 13. edycja Studenckiego Festiwalu Informatycznego?",
        answers: ["16-18.03", "15-20.04", "8-10.04", "1-3.03"],
        correct: "16-18.03"
    },
    {
        text: "Które z poniższych NIE jest przeglądarką?",
        answers: ["Word", "Chrome", "Frefox", "Safari"],
        correct: "Word"
    },
    {
        text: "Kto jest autorem jądra systemu operacyjnego Linux?",
        answers: ["Linus Torvalds", "Richard M. Stallman", "Anthony Linux", "Bill Gates"],
        correct: "Linus Torvalds"
    },
    {
        text: "Który z poniższych nie jest systemem operacyjnym?",
        answers: ["Arduino", "FreeBSD", "OS X", "DOS"],
        correct: "Arduino"
    },
    {
        text: "Jaki test musiałaby zdać maszyna, aby można było uznać, że myśli?",
        answers: ["Turinga", "McDonalda", "Assena", "Ahera"],
        correct: "Turinga"
    },
    {
        text: "Do czego służy CAPTCHA?",
        answers: ["do potwierdzenia że informację wysyła człowiek", "do szyfrowania wiadomości", "do tworzenia testów automatycznych", "do przeprowadzania wyborów internetowych"],
        correct: "do potwierdzenia że informację wysyła człowiek"
    },
    {
        text: "Który komputer jest najstarszy?",
        answers: ["Eniac", "Amiga", "Odra", "Macintosh"],
        correct: "Eniac"
    },
    {
        text: "Który z poniższych programów NIE służy do tworzenia grafiki?",
        answers: ["Wolfram Alpha", "MS Paint", "GIMP", "Photoshop"],
        correct: "Wolfram Alpha"
    },
    //{text: "<span class='s'?>Jak nazywamy łamanie zabezpieczeń sieci telefonicznych, najczęściej celem uzyskania połączenia darmowego lub tańszego niż tradycyjne?</span>", answers: ["phreaking","hacking","threating","handling"]},
    {
        text: "Pod jakim adresem mieści się Wydział Matematyki i Informatyki UJ?",
        answers: ["Łojasiewicza 6", "Norymberska 12", "Ruczajowa 5", "Gołębia 23"],
        correct: "Łojasiewicza 6"
    },
    {
        text: "Który adres IP jest nieprawidłowy?",
        answers: ["192.268.1.201", "127.0.0.1", "::1", "149.156.65.204"],
        correct: "192.268.1.201"
    },
    {
        text: "Jak nazywani są hakerzy działający zupełnie legalnie lub też starający się nie wyrządzać szkód?",
        answers: ["whitehat", "redhat", "blackhat", "Bonzo"],
        correct: "whitehat"
    },
    {
        text: "Który kabel służy do połączeń sieciowych?",
        answers: ["skrętka", "molex", "SATA", "DVI"],
        correct: "skrętka"
    },
    {
        text: "Które z poniższych NIE służy do połączania dysków?",
        answers: ["MOLEX", "iSCSI", "SATA", "USB"],
        correct: "MOLEX"
    },
    {
        text: "Jak nazywał się pierwszy polski Internet?",
        answers: ["NASK", "Odra", "CERT", "DNS"],
        correct: "NASK"
    },
    {
        text: "Co odpowiada za zamianę nazw domenowych (np. google.pl) na adresy IP",
        answers: ["DNS", "DHCP", "ARP", "TCP/IP"],
        correct: "DNS"
    },
    //{text: "Co robi klawisz SysRq w Linuksie?", answers: ["zapewnia dostęp do debugera jądra","nic - był wykozrsytywany tylko w DOSie","przyspiesza procesor","służy do blokowania ekranu"]},
    //{text: "12 Ile bajtów ma bit?", answers: ["1/8","8","1024","128"]},//pytań nie może być mniej jak 12!!!
    {
        text: "Ile porównań potrzeba, aby posortować ciąg 1000 elementów? Wybierz najmniejszą wystarczającą liczbę",
        answers: ["10000", "10", "1000", "100000"],
        correct: "10000"
    },
    {
        text: "Jaka jest najpopularniejsza architektura procesorów komputerowych?",
        answers: ["x86", "sparc", "powerpc", "avr"],
        correct: "x86"
    },
    {
        text: "Kto jest twórcą najpopularniejszej architektury komputerowej?",
        answers: ["John von Neumann", "Alan Turing", "Albert Einstein", "Linus Torvalds"],
        correct: "John von Neumann"
    },
    {
        text: "Ile okładek książek wystarczy przeczytać, aby znaleźć określoną pozycję na półce 1000 ułożonych alfabetycznie książek?",
        answers: ["10", "5", "50", "100"],
        correct: "10"
    },
    {
        text: "Co to jest Maszyna Turinga?",
        answers: ["Teroretyczny model obliczeń", "Maszyna rozszyfrowująca kod enigmy", "komputer zaprojektowany przez Alana Turinga", "algorytm wyszukiwania słów w tekście"],
        correct: "Teroretyczny model obliczeń"
    },
    {
        text: "Co to jest SQL?",
        answers: ["Język zapytań do baz danych", "System do przechowywania informacji", "Język do tworzenia stron internetowych", "Program do tworzenia raportów finansowych"],
        correct: "Język zapytań do baz danych"
    },
    {
        text: "Który z poniższych nie jest językiem programowania?",
        answers: ["XML", "C++", "Java", "Haskel"],
        correct: "XML"
    },
    {
        text: "Który z poniższych systemów operacyjnych powstał jako pierwszy?",
        answers: ["Unix", "Windows 95", "Linux", "MsDOS"],
        correct: "Unix"
    },
    {
        text: "Jaka jest pojemność płyty CD?",
        answers: ["700MB", "4,7GB", "50GB", "500kB"],
        correct: "700MB"
    },
    {
        text: "Którym z kabli nie podłączymy monitora?",
        answers: ["SAS", "HDMI", "DisplayPort", "VGA"],
        correct: "SAS"
    },
    {
        text: "Które z poniższych słów jest nazwą języka programowania?",
        answers: ["Python", "Anaconda", "Cobra", "Boa"],
        correct: "Python"
    },
    {
        text: "Liczba 81 w systemie szesnastkowym to",
        answers: ["51", "1010001", "121", "3E"],
        correct: "51"
    },
    {
        text: "Które z protokołów służy do wysyłania poczty email?",
        answers: ["smtp", "pop3", "ftp", "imap"],
        correct: "smtp"
    },
    {
        text: "Czym w informatyce jest demon (daemon)?",
        answers: ["proces pracujacy w tle", "rodzaj wirusa komputerowego", "błędny program zachowywujący się jak nawiedzony", "typ protokołu sieciowego"],
        correct: "proces pracujacy w tle"
    },
    {
        text: "Używanie której technologii NIE poprawi naszego bezpieczeństwa w internecie?",
        answers: ["HTTP", "VPN", "TLS", "SFTP"],
        correct: "HTTP"
    },
    {
        text: "Co to jest phishing?", 
        answers: ["Oszustwo polegające na zdobyciu zaufania ofiary przez podszycie się pod inną osobę lub instytucję w celu wyłudzenia danych", "Popularny żart internetowy, w którym odbiorcy komentują post wyłącznie słowem ,phi'", "Nazwa popularnej strony z komiksami", "Zdobywanie nowych użytkowników aplikacji przez infekowanie ich komputerów"],
        correct: "Oszustwo polegające na zdobyciu zaufania ofiary przez podszycie się pod inną osobę lub instytucję w celu wyłudzenia danych"
    }, 
    {
        text: "Na co należy zwrócić uwagę zanim udzielisz aplikacji zgody na dostęp do Twoich danych?",
        answers: ["Wszystkie odpowiedzi są prawidłowe", "Regulamin", "Do czego dokładnie aplikacja chce uzyskać dostęp", "Czy aplikacja pochodzi ze sprawdzonego źródła (App Store/Google Play)"],
        correct: "Wszystkie odpowiedzi są prawidłowe"
    },
    {
        text: "Jakie rzeczy należy sprawdzić gdy kupujemy coś przez internet?",
        answers: ["Wszystkie odpowiedzi są prawidłowe", "Czy adres strony zaczyna się od https", "Czy obok adresu znajduje się symbol zielonej kłodki", "Jakie opinie wystawili sprzedającemu poprzedni kupujący"],
        correct: 'Wszystkie odpowiedzi są prawidłowe'
    },
    {
        text: "Jakie powinny być bezpieczne hasła do kont internetowych (np skrzynki e-mail, Facebooka, itp)",
        answers: ["Długie, różne dla każdego konta, zawierające duże i małe litery, cyfry i znaki specjalne.", "Krótkie i łatwe do zapamiętania.", "Powinno się używać jednego hasła do wszystkich kont.", "Średniej długości, łatwe do zapamiętania frazy + cyfra na końcu."],
        correct: 'Długie, różne dla każdego konta, zawierające duże i małe litery, cyfry i znaki specjalne.'
    },
    {
        text: "Który z wymienionych elementów może wskazywać na to, że wysłana do nas wiadomość jest próbą wyłudzenia danych?",
        answers: ["Wszystkie odpowiedzi są prawidłowe", "Niepoprawny język, niepasujące słowa w środku zdania (np pochodzące z innego języka), literówki.", "Zbyt atrakcyjna oferta (np najnowszy iPhone za darmo)", "Podszywanie się pod inny adres (np alllegro.pl zamiast allegro.pl)"],
        correct: 'Wszystkie odpowiedzi są prawidłowe'
    }
];
