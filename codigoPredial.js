// JavaScript Document
//var predial=CalculaPredialDeTabla(120000,tabla);
//alert(predial);//DEBUG
 var dataPredial={
    "municipios":{
    	"Querétaro":{
            "2015":{
            	"tipo":"factor",
                "factorUrbano":[0.0016],
                "factorBaldio":[0.008]
            },
        	"2016":{
            	"tipo":"tabla",
                "tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.00,45129.00,90.95,0.0033]
,[45129.01,68596.08,140.98,0.00330416]
,[68596.09,104266.04,218.52,0.00336937]
,[104266.05,158484.38,338.70,0.00343587]
,[158484.39,240896.26,524.99,0.00350369]
,[240896.27,366162.32,813.74,0.00357284]
,[366162.33,556566.72,1261.29,0.00364335]
,[556566.73,845981.42,1955.00,0.00371526]
,[845981.43,1285891.76,3030.25,0.00378859]
,[1285891.77,1954555.48,4696.89,0.00386336]
,[1954555.49,2970924.33,7280.18,0.00393961]
,[2970924.34,4515804.97,11284.29,0.00401737]
,[4515804.98,6864023.56,17490.64,0.00409666]
,[6864023.57,10433315.81,27110.50,0.00417752]
,[10433315.82,15858640.03,42021.27,0.00425997]
,[15858640.04,24105132.85,65132.97,0.00434404]
,[24105132.86,36639801.94,100956.10,0.00442978]
,[36639801.95,55692498.94,156481.95,0.00451721]
,[55692498.95,84652598.39,242547.02,0.00460637]
,[84652598.40,128671949.56,375947.89,0.00469728]
,[128671949.57,195581363.33,582719.23,0.00478999]
,[195581363.34,297283672.26,903214.80,0.00488453]
,[297283672.27,451871181.84,1399982.94,0.00498094]
,[451871181.85,686844196.40,2169973.56,0.00507924]
,[686844196.41,9999999999.99,3363459.02,0.0055]
                 ]//Cierre tabla   
            },//Cierre anio               
        	"2017":{
            	"tipo":"tabla",
                "tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.00,45129.00,94.19,0.001148]
,[45129.01,68596.08,146.00,0.0034218]
,[68596.09,104266.04,226.30,0.0034893]
,[104266.05,158484.38,350.76,0.0035582]
,[158484.39,240896.26,543.68,0.0036284]
,[240896.27,366162.32,842.71,0.0037]
,[366162.33,556566.72,1306.19,0.0037731]
,[556566.73,845981.42,2024.60,0.0038475]
,[845981.43,1285891.76,3138.13,0.0039235]
,[1285891.77,1954555.48,4864.10,0.0040009]
,[1954555.49,2970924.33,7539.36,0.0040799]
,[2970924.34,4515804.97,11686.01,0.0041604]
,[4515804.98,6864023.56,18113.31,0.0042425]
,[6864023.57,10433315.81,28075.63,0.0043262]
,[10433315.82,15858640.03,43517.23,0.0044116]
,[15858640.04,24105132.85,67451.70,0.0044987]
,[24105132.86,36639801.94,104550.13,0.0045875]
,[36639801.95,55692498.94,162052.71,0.004678]
,[55692498.95,84652598.39,251181.70,0.0047704]
,[84652598.40,128671949.56,389331.63,0.0048645]
,[128671949.57,195581363.33,603464.03,0.0049605]
,[195581363.34,297283672.26,935369.25,0.0050584]
,[297283672.27,451871181.84,1449822.34,0.0051583]
,[451871181.85,686844196.40,2247224.62,0.0052601]
,[686844196.41,9999999999.99,3483198.16,0.006]
]
            },
        	"2018":{
                "tipo":"tabla",
            	"tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.00,45129.00,94.19,0.001148]
,[45129.01,68596.08,146.00,0.0034218]
,[68596.09,104266.04,226.30,0.0034892]
,[104266.05,158484.38,350.76,0.0035582]
,[158484.39,240896.26,543.68,0.0036284]
,[240896.27,366162.32,842.71,0.0036999]
,[366162.33,556566.72,1306.19,0.003773]
,[556566.73,845981.42,2024.60,0.0038475]
,[845981.43,1285891.76,3138.13,0.0039234]
,[1285891.77,1954555.48,4864.10,0.0040009]
,[1954555.49,2970924.33,7539.36,0.0040798]
,[2970924.34,4515804.97,11686.01,0.0041603]
,[4515804.98,6864023.56,18113.31,0.0042425]
,[6864023.57,10433315.81,28075.63,0.0043262]
,[10433315.82,15858640.03,43517.23,0.0044116]
,[15858640.04,24105132.85,67451.70,0.0044986]
,[24105132.86,36639801.94,104550.13,0.0045874]
,[36639801.95,55692498.94,162052.71,0.004678]
,[55692498.95,84652598.39,251181.70,0.0047703]
,[84652598.40,128671949.56,389331.63,0.0048645]
,[128671949.57,195581363.33,603464.03,0.0049605]
,[195581363.34,297283672.26,935369.25,0.0050584]
,[297283672.27,451871181.84,1449822.34,0.0051582]
,[451871181.85,686844196.40,2247224.62,0.00526]
,[686844196.41,9999999999.99,3483198.16,0.006]
]
            },
        	"2019":{
                "tipo":"tabla",
            	"tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0,45129,94.19,0.001148]
,[45129.01,68596.08,146,0.0034218]
,[68596.09,104266.04,226.3,0.0034892]
,[104266.05,158484.38,350.76,0.0035582]
,[158484.39,240896.26,543.68,0.0036284]
,[240896.27,366162.32,842.71,0.0036999]
,[366162.33,556566.72,1306.19,0.003773]
,[556566.73,845981.42,2024.6,0.0038475]
,[845981.43,1285891.76,3138.13,0.0039234]
,[1285891.77,1954555.48,4864.1,0.0040009]
,[1954555.49,2970924.33,7539.36,0.0040798]
,[2970924.34,4515804.97,11686.01,0.0041603]
,[4515804.98,6864023.56,18113.31,0.0042425]
,[6864023.57,10433315.81,28075.63,0.0043262]
,[10433315.82,15858640.03,43517.23,0.0044116]
,[15858640.04,24105132.85,67451.7,0.0044986]
,[24105132.86,36639801.94,104550.13,0.0045874]
,[36639801.95,55692498.94,162052.71,0.004678]
,[55692498.95,84652598.39,251181.7,0.0047703]
,[84652598.4,128671949.6,389331.63,0.0048645]
,[128671949.6,195581363.3,603464.03,0.0049605]
,[195581363.3,297283672.3,935369.25,0.0050584]
,[297283672.3,451871181.8,1449822.34,0.0051582]
,[451871181.9,686844196.4,2247224.62,0.00526]
,[686844196.4,10000000000,3483198.16,0.006]    
]
            }        
        },
        "El Marqués":{
            "2015":{
            	"tipo":"factor",
                "factorUrbano":[0.0016,0.0004],
                "factorBaldio":[0.0016,0.0084]
            },
            "2016":{
            	"tipo":"factor",
                "factorUrbano":[0.0016,0.0004],
                "factorBaldio":[0.0016,0.0084]
            },
        	"2017":{
            	"tipo":"tabla",
                "tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.00,51934.45,156.08,0.00161]
,[51934.46,79459.71,239.58,0.00466]
,[79459.72,121573.35,367.76,0.00467]
,[121573.36,186007.23,564.51,0.00469]
,[186007.24,284591.06,866.52,0.00470]
,[284591.07,435424.32,1330.11,0.00472]
,[435424.33,666199.21,2041.73,0.00473]
,[666199.22,1019284.79,3134.05,0.00475]
,[1019284.80,1559505.73,4810.77,0.00476]
,[1559505.74,2386043.76,7384.53,0.00478]
,[2386043.77,3650646.95,11335.25,0.00480]
,[3650646.96,5585489.84,17399.61,0.00481]
,[5585489.85,8545799.45,26708.40,0.00483]
,[8545799.46,13075073.16,40997.39,0.00484]
,[13075073.17,20004861.93,62930.99,0.00486]
,[20004861.94,30607438.76,96599.07,0.00487]
,[30607438.77,46829381.30,148279.58,0.00489]
,[46829381.31,71648953.39,227609.15,0.00491]
,[71648953.40,109622898.68,349380.04,0.00492]
,[109622898.69,167723034.99,536298.36,0.00494]
,[167723035.00,256616243.53,823217.99,0.00495]
,[256616243.54,392622852.60,1263639.61,0.00497]
,[392622852.61,600712964.47,1939686.81,0.00499]
,[600712964.48,919090835.65,2977419.25,0.00500]
,[919090835.66,9999999999.99,4570338.55,0.00550]
]
            },
        	"2018":{
                "tipo":"tabla",
            	"tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.00,51934.44,156.08,0.0016074]
,[51934.45,79459.70,239.56,0.0046553]
,[79459.71,121573.35,367.70,0.0046702]
,[121573.36,186007.22,564.38,0.0046851]
,[186007.23,284591.05,866.26,0.0047001]
,[284591.06,435424.31,1329.62,0.0047152]
,[435424.32,666199.20,2040.83,0.0047302]
,[666199.21,1019284.78,3132.46,0.0047454]
,[1019284.79,1559505.72,4808.01,0.0047606]
,[1559505.73,2386043.75,7379.81,0.0047758]
,[2386043.76,3650646.95,11327.27,0.0047911]
,[3650646.96,5585489.83,17386.22,0.0048065]
,[5585489.84,8545799.45,26686.10,0.0048219]
,[8545799.46,13075073.15,40960.49,0.0048373]
,[13075073.16,20004861.93,62870.25,0.0048528]
,[20004861.94,30607438.75,96499.54,0.0048684]
,[30607438.76,46829381.29,148117.14,0.0048839]
,[46829381.30,71648953.38,227344.99,0.0048996]
,[71648953.39,109622898.68,348951.82,0.0049153]
,[109622898.69,167723034.98,535606.14,0.0049310]
,[167723034.99,256616243.52,822101.86,0.0049468]
,[256616243.53,392622852.59,1261844.14,0.0049627]
,[392622852.60,600712964.47,1936804.57,0.0049785]
,[600712964.48,919090835.64,2972801.33,0.0049945]
,[919090835.65,9999999999.99,4562952.76,0.0055000]
]
            },
        	"2019":{
                "tipo":"tabla",
            	"tabla":[       //Es un arreglo de los rangos. //cada rango define limite inferior, limite superior, cuota fija, y tarifa excedente
[0.01,89975.06,132.60,0.00035]
,[89975.07,108099.92,164.61,0.00219]
,[108099.93,129875.90,204.35,0.00226]
,[129875.91,156038.51,253.68,0.00234]
,[156038.52,187471.39,314.92,0.00241]
,[187471.40,225236.21,390.95,0.00249]
,[225236.22,270608.49,485.34,0.00258]
,[270608.50,325120.71,602.52,0.00266]
,[325120.72,390614.03,747.99,0.00275]
,[390614.04,469300.53,928.58,0.00284]
,[469300.54,563837.89,1152.77,0.00294]
,[563837.90,677419.14,1431.09,0.00304]
,[677419.15,813880.56,1776.61,0.00314]
,[813880.57,977831.18,2205.56,0.00324]
,[977831.19,1174808.53,2738.07,0.00335]
,[1174808.54,1411465.60,3399.15,0.00346]
,[1411465.61,1695795.61,4219.85,0.00358]
,[1695795.62,2037401.94,5238.70,0.0037]
,[2037401.95,2447822.51,6503.54,0.00382]
,[2447822.52,2940919.47,8073.77,0.00395]
,[2940919.48,3533347.41,10023.12,0.00408]
,[3533347.42,4245115.87,12443.13,0.00422]
,[4245115.88,5100265.17,15447.43,0.00436]
,[5100265.18,6127678.41,19177.10,0.0045]
,[6127678.42,9999999999.99,23807.27,0.00464]
]
            }
        },
        "Corregidora":{
            "2015":{
            	"tipo":"tabla",
                "tabla":[
[0.00,44149.19,82.90,0.00094]
,[44149.20,62824.29,124.35,0.00333]
,[62824.30,89398.97,186.53,0.00351]
,[89398.98,127214.73,279.79,0.0037]
,[127214.74,181026.56,419.69,0.0039]
,[181026.57,257600.79,629.53,0.00411]
,[257600.80,366565.93,944.29,0.00433]
,[366565.94,521623.32,1416.44,0.00457]
,[521623.33,742269.98,2124.66,0.00481]
,[742269.99,1056250.18,3186.99,0.00508]
,[1056250.19,1503044.01,4780.49,0.00535]
,[1503044.02,2138831.63,7170.73,0.00564]
,[2138831.64,3043557.41,10756.10,0.00594]
,[3043557.42,4330982.19,16134.15,0.00627]
,[4330982.20,6162987.66,24201.23,0.00661]
,[6162987.67,8769931.44,36301.84,0.00696]
,[8769931.45,12479612.43,54452.76,0.00734]
,[12479612.44,17758488.49,81679.14,0.00774]
,[17758488.50,25270329.12,122518.71,0.00816]
,[25270329.13,35959678.34,183778.07,0.0086]
,[35959678.35,51170622.28,275667.11,0.00906]
,[51170622.29,72815795.51,413500.66,0.00955]
,[72815795.52,103616877.01,620250.99,0.01007]
,[103616877.02,147446815.99,930376.49,0.01061]
,[147446816.00,9999999999.99,1395564.74,0.018]
                ]
            },
             "2016":{
            	"tipo":"tabla",
                "tabla":[
[0.00,45915.15,91.75,0.00092]
,[45915.16,64281.21,133.96,0.00336]
,[64281.22,89993.70,195.58,0.0035]
,[89993.71,125991.18,285.54,0.00365]
,[125991.19,176387.65,416.89,0.00381]
,[176387.66,246942.71,608.66,0.00397]
,[246942.72,345719.80,888.65,0.00414]
,[345719.81,484007.72,1297.42,0.00432]
,[484007.73,677610.80,1894.24,0.0045]
,[677610.81,948655.12,2765.59,0.00469]
,[948655.13,1328117.17,4037.76,0.00489]
,[1328117.18,1859364.04,5895.13,0.0051]
,[1859364.05,2603109.66,8606.89,0.00532]
,[2603109.67,3644353.53,12566.06,0.00555]
,[3644353.54,5102094.94,18346.45,0.00579]
,[5102094.95,7142932.91,26785.81,0.00604]
,[7142932.92,10000106.08,39107.29,0.0063]
,[10000106.09,14000148.51,57096.64,0.00657]
,[14000148.52,19600207.91,83361.09,0.00685]
,[19600207.92,27440291.08,121707.19,0.00714]
,[27440291.09,38416407.51,177692.50,0.00745]
,[38416407.52,53782970.52,259431.05,0.00777]
,[53782970.53,75296158.72,378769.34,0.0081]
,[75296158.73,105414622.21,553003.24,0.00845]
,[105414622.22,9999999999.99,807384.72,0.00878]
                ]//Cierre tabla   
            },//Cierre anio
              "2017":{
            	"tipo":"tabla",
                "tabla":[
[0.00,45915.15,97.71,0.00094]
,[45915.16,64281.21,141.00,0.0034]
,[64281.22,89993.70,203.46,0.00351]
,[89993.71,125991.18,293.60,0.00361]
,[125991.19,176387.65,423.66,0.00372]
,[176387.66,246942.71,611.35,0.00384]
,[246942.72,345719.80,882.17,0.00396]
,[345719.81,484007.72,1272.98,0.00408]
,[484007.73,677610.80,1836.90,0.0042]
,[677610.81,948655.12,2650.65,0.00433]
,[948655.13,1328117.17,3824.89,0.00447]
,[1328117.18,1859364.04,5519.32,0.0046]
,[1859364.05,2603109.66,7964.37,0.00474]
,[2603109.67,3644353.53,11492.59,0.00489]
,[3644353.54,5102094.94,16583.81,0.00504]
,[5102094.95,7142932.91,23930.44,0.00519]
,[7142932.92,10000106.08,34531.62,0.00535]
,[10000106.09,14000148.51,49829.13,0.00552]
,[14000148.52,19600207.91,71903.44,0.00569]
,[19600207.92,27440291.08,103756.66,0.00586]
,[27440291.09,38416407.51,149720.86,0.00604]
,[38416407.52,53782970.52,216047.20,0.00623]
,[53782970.53,75296158.72,311756.10,0.00642]
,[75296158.73,105414622.21,449864.06,0.00662]
,[105414622.22,9999999999.99,649153.83,0.007]
                 ]//Cierre tabla   
            },//Cierre anio
              "2018":{
            	"tipo":"tabla",
                "tabla":[
[0.01,53538.23,105.00,0.000825]
,[53538.24,74475.75,149.21,0.003]
,[74475.76,103601.42,212.03,0.003065]
,[103601.43,144117.44,301.31,0.003131]
,[144117.45,200478.30,428.18,0.003198]
,[200478.31,278880.54,608.47,0.003267]
,[278880.55,387944.01,864.68,0.003338]
,[387944.02,539659.57,1228.77,0.00341]
,[539659.58,750707.44,1746.17,0.003483]
,[750707.45,1044291.05,2481.44,0.003559]
,[1044291.06,1452688.14,3526.31,0.003635]
,[1452688.15,2020799.50,5011.15,0.003714]
,[2020799.51,2811085.54,7121.22,0.003794]
,[2811085.55,3910433.43,10119.79,0.003876]
,[3910433.44,5439709.81,14380.99,0.003959]
,[5439709.82,7567049.38,20436.48,0.004045]
,[7567049.39,10526340.24,29041.79,0.004132]
,[10526340.25,14642938.53,41270.59,0.004221]
,[14642938.54,20369439.31,58648.64,0.004312]
,[20369439.32,28335436.70,83344.17,0.004405]
,[28335436.71,39416743.92,118438.40,0.0045]
,[39416743.93,54831683.65,168309.97,0.004597]
,[54831683.66,76275035.24,239181.26,0.004696]
,[76275035.25,106104365.50,339894.76,0.004798]
,[106104365.51,9999999999.99,483016.30,0.004902]
                 ]//Cierre tabla   
            },//Cierre anio
              "2019":{
            	"tipo":"tabla",
                "tabla":[
[0.01,61979.49,112.44,0.000742]
,[61979.5,85437.12,158.49,0.002766]
,[85437.13,117772.85,223.38,0.002828]
,[117772.86,162346.81,314.86,0.002892]
,[162346.82,223790.86,443.78,0.002957]
,[223790.87,308489.87,625.5,0.003023]
,[308489.88,425245.26,881.62,0.003091]
,[425245.27,586189.53,1242.62,0.003161]
,[586189.54,808047.01,1751.44,0.003232]
,[808047.02,1113871.78,2468.61,0.003305]
,[1113871.79,1535443.26,3479.45,0.003379]
,[1535443.27,2116568.57,4904.19,0.003455]
,[2116568.58,2917634.68,6912.33,0.003533]
,[2917634.69,4021883.47,9742.75,0.003612]
,[4021883.48,5544061.69,13732.15,0.003694]
,[5544061.7,7642344.75,19355.11,0.003777]
,[7642344.76,10534773.32,27280.53,0.003862]
,[10534773.33,14521910.84,38451.2,0.003948]
,[14521910.85,20018076.12,54195.97,0.004037]
,[20018076.13,27594396.92,76387.82,0.004128]
,[27594396.93,38038157.94,107666.65,0.004221]
,[38038157.95,52434610.69,151753.35,0.004316]
,[52434610.7,72279746.09,213892.42,0.004413]
,[72279746.1,99635748.73,301475.82,0.004512]
,[99635748.74,10000000000,424922.35,0.004613]
                 ]//Cierre tabla   
            }//Cierre anio        
        },//Cierre Municipio concreto
    	"León, Gto":{
            "2018":{
            	"tipo":"factor",
                "factorUrbano":[0.00234]
            }   
        },//Cierre Municipio concreto
    	"Aguascalientes":{
            "2018":{
            	"tipo":"factor",
                "factorUrbano":[0.00146]
            }
        },//Cierre Municipio concreto
    	"Guadalajara":{
            "2018":{
            	"tipo":"factor",
                "factorUrbano":[0.001524]
            },"2019":{
            	"tipo":"tabla",
                "multiplicaX":6,//Pues las tablas son por bimestre
                "tabla":[
[0,776142.9,0,0.000254]
,[776142.91,1053400.41,197.14,0.000254]
,[1053400.42,1325856.37,267.56,0.000279]
,[1325856.38,1668739.75,343.69,0.000305]
,[1668739.76,2188818.99,448.2,0.00033]
,[2188819,3146685.51,619.93,0.000356]
,[3146685.52,4944269.46,960.55,0.000381]
,[4944269.47,9858156.01,1645.43,0.000406]
,[9858156.02,42976151.21,3642.43,0.000432]
,[42976151.22,10000000000,17942.78,0.000457]
                 ]//Cierre tabla   
            }//Cierre anio  
        },//Cierre Municipio concreto
    	"Monterrey, NL":{
            "2018":{
            	"tipo":"factor",
                "factorUrbano":[0.002]
            }
        }, //Cierre Municipio concreto      
        "CDMX":{
            "2015":{
            	"tipo":"tabla",
                "multiplicaX":6,//Pues las tablas son por bimestre
                "tabla":[
[0.11,162740.82,163.11,0.0001628]
,[162740.83,325481.16,189.61,0.0003105]
,[325481.17,650963.56,240.14,0.0009702]
,[650963.57,976444.7,555.92,0.0011906]
,[976444.71,1301927.1,943.43,0.001221]
,[1301927.11,1627408.26,1340.84,0.0014192]
,[1627408.27,1952889.39,1802.75,0.0014666]
,[1952889.4,2278371.81,2280.09,0.0016024]
,[2278371.82,2603852.96,2801.63,0.0016759]
,[2603852.97,2929335.38,3347.1,0.0017246]
,[2929335.39,3254816.51,3908.43,0.0017777]
,[3254816.52,3580297.67,4487.03,0.0018259]
,[3580297.68,3906090.04,5081.34,0.001929]
,[3906090.05,11718268.85,5709.8,0.0020829]
,[11718268.86,24663843.29,21982.04,0.002084]
,[24663843.3,10000000000,48960.03,0.0021665]
                ]
            }, //Cierre anio
            "2016":{
            	"tipo":"tabla",
                "multiplicaX":6,//Pues las tablas son por bimestre
                "tabla":[
[0.11,162740.82,163.11,0.0001628]
,[162740.83,325481.16,189.61,0.0003105]
,[325481.17,650963.56,240.14,0.0009702]
,[650963.57,976444.7,555.92,0.0011906]
,[976444.71,1301927.1,943.43,0.001221]
,[1301927.11,1627408.26,1340.84,0.0014192]
,[1627408.27,1952889.39,1802.75,0.0014666]
,[1952889.4,2278371.81,2280.09,0.0016024]
,[2278371.82,2603852.96,2801.63,0.0016759]
,[2603852.97,2929335.38,3347.1,0.0017246]
,[2929335.39,3254816.51,3908.43,0.0017777]
,[3254816.52,3580297.67,4487.03,0.0018259]
,[3580297.68,3906090.04,5081.34,0.001929]
,[3906090.05,11718268.85,5709.8,0.0020829]
,[11718268.86,24663843.29,21982.04,0.002084]
,[24663843.3,10000000000,48960.03,0.0021665]
                ]
            }, //Cierre anio
            "2017":{
            	"tipo":"tabla",
                "multiplicaX":6,//Pues las tablas son por bimestre
                "tabla":[
[0.11,162740.82,169.62,0.0001693]
,[162740.83,325481.16,197.18,0.0003228]
,[325481.17,650963.56,249.72,0.0010089]
,[650963.57,976444.7,578.1,0.001238]
,[976444.71,1301927.1,981.07,0.0012697]
,[1301927.11,1627408.26,1394.34,0.0014757]
,[1627408.27,1952889.39,1874.68,0.0015251]
,[1952889.4,2278371.81,2371.07,0.0016663]
,[2278371.82,2603852.96,2913.42,0.0017427]
,[2603852.97,2929335.38,3480.65,0.0017934]
,[2929335.39,3254816.51,4064.38,0.0018486]
,[3254816.52,3580297.67,4666.06,0.0018988]
,[3580297.68,3906090.04,5284.09,0.0020059]
,[3906090.05,11718268.85,5937.62,0.002166]
,[11718268.86,24663843.29,22859.12,0.0021671]
,[24663843.3,10000000000,50913.54,0.0022529]
                ]
            }, //Cierre anio
            "2018":{
            	"tipo":"tabla",
                "multiplicaX":6,//Pues las tablas son por bimestre
                "tabla":[
[0.11,171659.02,178.92,0.0001693]
,[171659.03,343317.53,207.98,0.0003228]
,[343317.54,686636.36,263.39,0.0010089]
,[686636.37,1029953.87,609.76,0.001238]
,[1029953.88,1373272.71,1034.79,0.0012697]
,[1373272.72,1716590.23,1470.7,0.0014757]
,[1716590.24,2059907.73,1977.34,0.0015251]
,[2059907.74,2403226.59,2500.93,0.0016663]
,[2403226.6,2746544.1,3073,0.0017427]
,[2746544.11,3089862.96,3671.3,0.0017934]
,[3089862.97,3433180.45,4287.01,0.0018486]
,[3433180.46,3776497.98,4921.67,0.0018988]
,[3776497.99,4120143.77,5573.56,0.0020059]
,[3776497.99,4120143.77,5573.56,0.0020059]
,[12360429.99,26015421.9,24111.34,0.0021671]
,[26015421.91,10000000000,53703.07,0.0022529]
                ]
            } //Cierre anio
        }//Cierre Municipio concreto
        
//--        
 	}, //Cierre municipios
    "anioInicial":2015,
    "anioFinal":2019
 };

function CalculaPredialDeTabla(valorCatastral,tabla){
    var nTabla=tabla.length;
    for(var i=0;i<nTabla;i++){
        var limInferior=tabla[i][0];
        var limSuperior=tabla[i][1];
        var cuotaFija=tabla[i][2];
        var tarifaEx=tabla[i][3];
        if(valorCatastral<=limSuperior){//Se encuentra en este rango
            var predialCalculado=cuotaFija+(valorCatastral-limInferior)*tarifaEx;
            return predialCalculado;
        }
    }
    return 0;
}
function CalculaPredial(){
    //var predial=CalculaPredialDeTabla(valorCatastral,tabla);
    document.getElementById("resPredial").innerHTML="";
    document.getElementById("valorCtastralFto").innerHTML="";
    var valorCatastral=parseFloat(document.getElementById("valorCatastral").value);
    if(isNaN(valorCatastral)||valorCatastral<1){alert("Especificar un valor catastral correcto"); return;}
    document.getElementById("valorCtastralFto").innerHTML="<p>$"+FormateaNum(valorCatastral)+"</p>";
    var recTab="<tr><th></th>";
    for(var iAnio=dataPredial["anioInicial"];iAnio<=dataPredial["anioFinal"];iAnio++){
        recTab+="<th>"+iAnio+"</th>";
    }
    recTab+="</tr>";
  var keysMunicipios=Object.keys(dataPredial["municipios"]);
 for(var iMun=0,nMun=keysMunicipios.length;iMun<nMun;iMun++){
 	var NombreMunicipio=keysMunicipios[iMun];
    var DatosMunicipio=dataPredial["municipios"][NombreMunicipio];
    //console.log(NombreMunicipio);
    recTab+="<tr><th>"+NombreMunicipio+"</th>";
    var predialAnt=0;
    for(var iAnio=dataPredial["anioInicial"];iAnio<=dataPredial["anioFinal"];iAnio++){
    	var datosAnio=DatosMunicipio[iAnio];
        if(datosAnio!==undefined){
            var tipo=datosAnio["tipo"];
            var predial=0;
            recTab+="<td>";
            if(tipo=="tabla"){
                var tabla=datosAnio["tabla"];
                var multiplicaX=datosAnio["multiplicaX"];
                predial=CalculaPredialDeTabla(valorCatastral,tabla);
                if(multiplicaX>0)predial=predial*multiplicaX;
            }else if(tipo=="factor"){
                var factores=datosAnio["factorUrbano"];
                for(var iFact=0,nFact=factores.length;iFact<nFact;iFact++){
                    var factor=factores[iFact];
                    predial+=valorCatastral*factor;
                }
            }
            var dif=0;
            if(predialAnt>0){
                dif=Math.round((predial/predialAnt-1)*100);
            }
            predialAnt=predial;
            predial=FormateaNum(predial);
            recTab+="$ "+predial;
            if(dif!=0)recTab+= " ("+dif+"%)";
            if(NombreMunicipio=="El Marqués" && iAnio==2019){
                recTab+= " <strong>*</strong>"
            }
            
            
            
            recTab+="</td>";
        }else {
        	recTab+="<td>"+0+"</td>";
           }
    }
    recTab+="</tr>"
 }
 document.getElementById("resPredial").innerHTML="<table border='1'>"+recTab+"</table>";
}

function FormateaNum(num){
     num=Math.round((num+0.00000001)*100.0)/100.0;
     var numTxtPart=num.toString().split(".");
     var entero=numTxtPart[0];
     var nEnt=entero.length;
     var resTxt="";
     for(var i=nEnt-1,i2=0;i>=0;i--,i2++){
        if(i2>0&&((i2%3)==0)){
            resTxt= ","+resTxt;
        }
         resTxt= entero[i]+resTxt;  
     }
     var decimales="";
     if(numTxtPart.length>1)decimales=numTxtPart[1];
     decimales+="00";
     
     resTxt+="."+decimales.substring(0,2);
     return resTxt;
}
