# Payslip Generator app

This sample application generate employee monthly playslip information in csv file format.
 * Runs on Node.js version 4 or later.

### Assumptions , Design, Source Code Explanation and How to run the application

 * See [EX Coding Exercise - How to Run and Design Document.docx](https://github.com/thomasng/payslipgenerator/blob/master/EX%20Coding%20Exercise%20-%20How%20to%20Run%20and%20Design%20Document.docx).


### Running the app

Steps of setting up:
```shell
$ git clone https://github.com/thomasng/payslipgenerator payslipgenerator
$ cd ./payslipgenerator
$ npm install
$ node src/index.js 2012 ./input_files/salary2012.csv ./output_files/result2012.csv       # run application without any command line option
```


Command line for running the application:
```shell
$ node index.js [year] [inputCsvFile] [outputCsvFile]        
```

Example:
```shell
$ node src/index.js 2012 ./input_files/salary2012.csv ./output_files/result2012.csv        
```

Alternatively, you can run the included batch files in node.js shell for generating payslip information.
```shell

$ run                # run the application to generate payslips for financial year 2012
$ run_5000_payslip   # run the application to generate 5000 payslips for financial year 2014
$ run_error_sample   # run the application to generate payslips for financial year 2012 and some input csv records has error
$ run_year_2009      # run the application to generate payslips for financial year 2009
```


Steps of running all unit tests:
```shell
$ npm test               # run all unit tests
```
