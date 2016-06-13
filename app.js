var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    // http://www.convertcsv.com/csv-to-json.htm
    var students = [
        {
            "name": "Andrii Duntsiv",
            "websiteUrl": "http://duntsiva.github.io/prog/",
            "codeSourceUrl": "https://github.com/DuntsivA/prog",
            "photo": "images/students/duntsiv.jpg",
            "cvUrl": 0
        },
        {
            "name": "Nazar Bostrikov",
            "websiteUrl": "http://nazavr.github.io/website/",
            "codeSourceUrl": "https://github.com/nazavr/website",
            "photo": "images/students/bostrikov.jpg",
            "cvUrl": "https://drive.google.com/file/d/0BzMDZWgaNvBqTHhOa3hiaGpGeW8/view?usp=sharing"
        },
        {
            "name": "Nazarii Viazivskyi",
            "websiteUrl": "http://nazar82.github.io/my_web_cv/",
            "codeSourceUrl": "https://github.com/Nazar82/my_web_cv",
            "photo": "images/students/viazivskii.png",
            "cvUrl": 0
        },
        {
            "name": "Pavlo Matsibokh",
            "websiteUrl": "http://matsibokh.github.io/royally_v1.1/",
            "codeSourceUrl": "https://github.com/matsibokh/royally_v1.1",
            "photo": "images/students/matsiboh.jpg",
            "cvUrl": 0
        },
        {
            "name": "Roland Umba",
            "websiteUrl": "http://roland03.github.io/task-3",
            "codeSourceUrl": "https://github.com/Roland03/task-3",
            "photo": "images/students/umba.jpg",
            "cvUrl": 0
        },
        {
            "name": "Serhii Kovdrya",
            "websiteUrl": "http://kovdrja.github.io/MyFirstWebsite",
            "codeSourceUrl": "https://github.com/Krokhmalnyi/ITAcademy",
            "photo": "images/students/kovdrya.jpg",
            "cvUrl": 0
        },
        {
            "name": "Serhii Krokhmalnyi",
            "websiteUrl": "http://krokhmalnyi.github.io/ITAcademy",
            "codeSourceUrl": 0,
            "photo": "images/students/krohmalniy.jpg",
            "cvUrl": 0
        },
        {
            "name": "Volodymyr Krokhmalnyi",
            "websiteUrl": "http://vkrokhmalnyi.github.io/portfolio/",
            "codeSourceUrl": "https://github.com/vkrokhmalnyi/portfolio",
            "photo": "images/students/krohmalniyv.jpg",
            "cvUrl": 0
        },
        {
            "name": "Yaroslav Zdyrko",
            "websiteUrl": "http://yarko666.github.io/finalproject/",
            "codeSourceUrl": "https://github.com/yarko666/finalproject",
            "photo": "images/students/zdyrko.jpg",
            "cvUrl": 0
        },
        {
            "name": "Mariana Diachok",
            "websiteUrl": "http://mdiachok.github.io/Portfolio/",
            "codeSourceUrl": "https://github.com/mdiachok/Portfolio",
            "photo": "images/students/diachok.jpg",
            "cvUrl": 0
        },
        {
            "name": "Oleksandr Butyter",
            "websiteUrl": "http://oleksandrbutyter.github.io/MainProjectTest/",
            "codeSourceUrl": "https://github.com/OleksandrButyter/MainProjectTest",
            "photo": "images/students/butyter.jpg",
            "cvUrl": 0
        },
        {
            "name": "Khrystyna Tonysheva",
            "websiteUrl": "http://ktonytc.github.io/finalsite",
            "codeSourceUrl": "http://ktonytc.github.io/finalsite/contact.html",
            "photo": "images/students/tonysheva.jpg",
            "cvUrl": 0
        },
        {
            "name": "Rama Mukumbi",
            "websiteUrl": "http://macrama.github.io/htmlpro",
            "codeSourceUrl": "https://github.com/macrama/htmlpro",
            "photo": "images/students/mukumbi.jpg",
            "cvUrl": 0
        },
        {
            "name": "Hennadii Aliiev",
            "websiteUrl": "http://hennadiy-aliiev.github.io/main-project/",
            "codeSourceUrl": "https://github.com/hennadiy-aliiev/main-project",
            "photo": "images/students/aliiev.png",
            "cvUrl": 0
        },
        {
            "name": "Olha Sarafin",
            "websiteUrl": "http://sarafin.github.io/pr4/",
            "codeSourceUrl": "https://github.com/sarafin/pr4",
            "photo": "images/students/sarafin.jpg",
            "cvUrl": 0
        },
        {
            "name": "Dmytro Novitsky",
            "websiteUrl": "http://dimaworld022.github.io/homework",
            "codeSourceUrl": "https://github.com/DimaWorld022/homework",
            "photo": "images/students/novitskiy.jpg",
            "cvUrl": 0
        },
        {
            "name": "Tetiana Smachylo",
            "websiteUrl": "http://smachulotetiana.github.io/my_project/",
            "codeSourceUrl": "https://github.com/SmachuloTetiana/my_project",
            "photo": "images/students/smachylo.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B79K1tcEV6e-azMzenRHS2djVmc/view"
        },
        {
            "name": "Ievgen Kliuchyk",
            "websiteUrl": "http://kliuchyk.github.io/main-draft-2",
            "codeSourceUrl": "https://github.com/kliuchyk/main-draft-2",
            "photo": "images/students/kliuchik.jpg",
            "cvUrl": "https://drive.google.com/open?id=0B2iSgek-saHTeU55QXlOSk5GSG8"
        },
        {
            "name": "Liubov Vykhopen",
            "websiteUrl": "http://liubav.github.io/mine/",
            "codeSourceUrl": "https://github.com/liubav/mine",
            "photo": "images/students/no-photo.gif",
            "cvUrl": 0
        },
        {
            "name": "Vitalii Hnylytsia",
            "websiteUrl": "http://gnylytsya.github.io/finalproject02",
            "codeSourceUrl": "https://github.com/gnylytsya/finalproject02",
            "photo": "images/students/hnylitsa.jpg",
            "cvUrl": 0
        },
        {
            "name": "Anastasiia Andrikova",
            "websiteUrl": 0,
            "codeSourceUrl": 0,
            "photo": "images/students/andrikova.jpg",
            "cvUrl": 0
        },
        {
            "name": "Anatoliy Danylyuk",
            "websiteUrl": "http://megamachine.github.io/proj_website",
            "codeSourceUrl": "https://github.com/MegaMachine/proj_website",
            "photo": "images/students/danylyuk.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B9bCvlSDjUh1UThsbm94ZmRrdlE/view?usp=sharing"
        },
        {
            "name": "Viktoriia Volianska",
            "websiteUrl": 0,
            "codeSourceUrl": 0,
            "photo": "images/students/volianska.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B8sJ_wPUdIlxVG12bUF3bzZjZGs/view?usp=sharing"
        },
        {
            "name": "Yana Plotnykova",
            "websiteUrl": "http://yanaplotnikova.github.io/myproject",
            "codeSourceUrl": "https://github.com/YanaPlotnikova/myproject",
            "photo": "images/students/plotnykova.jpg",
            "cvUrl": 0
        },
        {
            "name": "Olena Konyk",
            "websiteUrl": "http://olenakonyk.github.io/finalproject",
            "codeSourceUrl": "https://github.com/Olenakonyk/finalproject",
            "photo": "images/students/konyk.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B685Sv58Yr5TUTVXTUFIblFyM0E/view?usp=sharing"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
