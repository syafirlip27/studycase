#include <iostream>

bool isLeapYear(int year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;  
    } else {
        return false; 
    }
}

int main() {
    for (int year = 1600; year <= 2024; year+=4) {
        if (isLeapYear(year)) {
            std::cout << year << " adalah tahun kabisat." << std::endl;
        } else {
            std::cout << year << " bukan tahun kabisat." << std::endl;
        }
    }

    return 0;
}