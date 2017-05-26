var pytania = [
    //uwaga: pierwsza odpowiedź jest prawidłowa, randomizcja w czasie runtime!
    {
        pytanie: "Ile bajtów ma kilobajt?", odpowiedzi: ["1024", "1000", "miliard", "8"]
    },
    {
        pytanie: "Ile bajtów ma megabajt?", odpowiedzi: ["1048576", "miliard", "1024", "1000"]
    },
    {
        pytanie: "Ile bajtów ma bit?", odpowiedzi: ["1/8", "8", "1024", "128"]
    },
    {
        pytanie: "Co to jest ZIP?",
        odpowiedzi: ["format kompresji", "format obrazka", "format dokumentu", "plik wykonywalny"]
    },
    //{pytanie: "Ile lat ma KSI?", odpowiedzi: ["41","16","100","40"]},
    {
        pytanie: "Jakim skrótem klawiaturowym możesz cofnąć ostatnią zmianę?",
        odpowiedzi: ["Ctrl+Z", "Ctrl+Y", "Ctrl+B", "Ctrl+Alt+Del"]
    },
    {
        pytanie: "Jakim poleceniem można wydrukować określony komunikat na ekran w konsoli linuksowej?",
        odpowiedzi: ["echo", "ls", "dir", "send"]
    },
    {
        pytanie: "Kiedy odbywa się 13. edycja Studenckiego Festiwalu Informatycznego?",
        odpowiedzi: ["16-18.03", "15-20.04", "8-10.04", "1-3.03"]
    },
    {
        pytanie: "Które z poniższych NIE jest przeglądarką?", odpowiedzi: ["Word", "Chrome", "Frefox", "Safari"]
    },
    {
        pytanie: "Kto jest autorem jądra systemu operacyjnego Linux?",
        odpowiedzi: ["Linus Torvalds", "Richard M. Stallman", "Anthony Linux", "Bill Gates"]
    },
    {
        pytanie: "Który z poniższych nie jest systemem operacyjnym?", odpowiedzi: ["Arduino", "FreeBSD", "OS X", "DOS"]
    },
    {
        pytanie: "Jaki test musiałaby zdać maszyna, aby można było uznać, że myśli?",
        odpowiedzi: ["Turinga", "McDonalda", "Assena", "Ahera"]
    },
    {
        pytanie: "Do czego służy CAPTCHA?",
        odpowiedzi: ["do potwierdzenia że informację wysyła człowiek", "do szyfrowania wiadomości", "do tworzenia testów automatycznych", "do przeprowadzania wyborów internetowych"]
    },
    {
        pytanie: "Który komputer jest najstarszy?", odpowiedzi: ["Eniac", "Amiga", "Odra", "Macintosh"]
    },
    {
        pytanie: "Który z poniższych programów NIE służy do tworzenia grafiki?",
        odpowiedzi: ["Wolfram Alpha", "MS Paint", "GIMP", "Photoshop"]
    },
    //{pytanie: "<span class='s'?>Jak nazywamy łamanie zabezpieczeń sieci telefonicznych, najczęściej celem uzyskania połączenia darmowego lub tańszego niż tradycyjne?</span>", odpowiedzi: ["phreaking","hacking","threating","handling"]},
    {
        pytanie: "Pod jakim adresem mieści się Wydział Matematyki i Informatyki UJ?",
        odpowiedzi: ["Łojasiewicza 6", "Norymberska 12", "Ruczajowa 5", "Gołębia 23"]
    },
    {
        pytanie: "Który adres IP jest nieprawidłowy?",
        odpowiedzi: ["192.268.1.201", "127.0.0.1", "::1", "149.156.65.204"]
    },
    {
        pytanie: "Jak nazywani są hakerzy działający zupełnie legalnie lub też starający się nie wyrządzać szkód?",
        odpowiedzi: ["whitehat", "redhat", "blackhat", "Bonzo"]
    },
    {
        pytanie: "Który kabel służy do połączeń sieciowych?", odpowiedzi: ["skrętka", "molex", "SATA", "DVI"]
    },
    {
        pytanie: "Które z poniższych NIE służy do połączania dysków?", odpowiedzi: ["MOLEX", "iSCSI", "SATA", "USB"]
    },
    {
        pytanie: "Jak nazwyał się pierwszy polski Internet?", odpowiedzi: ["NASK", "Odra", "CERT", "DNS"]
    },
    {
        pytanie: "Co odpowiada za zamianę nazw domenowych (np. google.pl) na adresy IP",
        odpowiedzi: ["DNS", "DHCP", "ARP", "TCP/IP"]
    },
    //{pytanie: "Co robi klawisz SysRq w Linuksie?", odpowiedzi: ["zapewnia dostęp do debugera jądra","nic - był wykozrsytywany tylko w DOSie","przyspiesza procesor","służy do blokowania ekranu"]},
    //{pytanie: "12 Ile bajtów ma bit?", odpowiedzi: ["1/8","8","1024","128"]},//pytań nie może być mniej jak 12!!!
    {
        pytanie: "Ile porównań potrzeba, aby posortować ciąg 1000 elementów? Wybierz najmniejszą wystarczającą liczbę",
        odpowiedzi: ["10000", "10", "1000", "100000"]
    },
    {
        pytanie: "Jaka jest najpopularniejsza architektura procesorów komputerowych?",
        odpowiedzi: ["x86", "sparc", "powerpc", "avr"]
    },
    {
        pytanie: "Kto jest twórcą najpopularniejszej architektury komputerowej?",
        odpowiedzi: ["John von Neumann", "Alan Turing", "Albert Einstein", "Linus Torvalds"]
    },
    {
        pytanie: "Ile okładek książek wystarczy przeczytać, aby znaleźć określoną pozycję na półce 1000 ułożonych alfabetycznie książek?",
        odpowiedzi: ["10", "5", "50", "100"]
    },
    {
        pytanie: "Co to jest Maszyna Turinga?",
        odpowiedzi: ["Teroretyczny model obliczeń", "Maszyna rozszyfrowująca kod enigmy", "komputer zaprojektowany przez Alana Turinga", "algorytm wyszukiwania słów w tekście"]
    },
    {
        pytanie: "Co to jest SQL?",
        odpowiedzi: ["Język zapytań do baz danych", "System do przechowywania informacji", "Język do tworzenia stron internetowych", "Program do tworzenia raportów finansowych"]
    },
    {
        pytanie: "Który z poniższych nie jest językiem programowania?", odpowiedzi: ["XML", "C++", "Java", "Haskel"]
    },
    {
        pytanie: "Który z poniższych systemów operacyjnych powstał jako powierszy?",
        odpowiedzi: ["Unix", "Windows 95", "Linux", "MsDOS"]
    },
    {
        pytanie: "Jaka jest pojemność płyty CD?", odpowiedzi: ["700MB", "4,7GB", "50GB", "500kB"]
    },
    {
        pytanie: "Którym z kabli nie podłączymy monitora?", odpowiedzi: ["SAS", "HDMI", "DisplayPort", "VGA"]
    },
    {
        pytanie: "Które z poniższych słów jest nazwą języka programowania?",
        odpowiedzi: ["Python", "Anaconda", "Cobra", "Boa"]
    },
    {
        pytanie: "Liczba 81 w systemie szesnastkowym to", odpowiedzi: ["51", "1010001", "121", "3E"]
    },
    {
        pytanie: "Które z protokołów służy do wysyłania poczty email?", odpowiedzi: ["smtp", "pop3", "ftp", "imap"]
    },
    {
        pytanie: "Czym w informatyce jest demon (daemon)?",
        odpowiedzi: ["proces pracujacy w tle", "rodzaj wirusa komputerowego", "błędny program zachowywujący się jak nawiedzony", "typ protokołu sieciowego"]
    },
    {
        pytanie: "Używanie której technologii NIE poprawi naszego bezpieczeństwa w internecie?",
        odpowiedzi: ["HTTP", "VPN", "TLS", "SFTP"]
    }
];
