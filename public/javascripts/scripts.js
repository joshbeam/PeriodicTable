/*
TODO: add possible ions for each element
TODO: temperature scale that shows changes in state
TODO: select elements to form compounds
*/

angular.module('periodicTable',[]);
	
angular.module('periodicTable')
	.factory('Element',[function() {
		Element.prototype = {};
		
		function Element(props) {
			this.name = props.name;
			this.symbol = props.symbol;
			this.atomicNumber = props.atomicNumber;
			this.coords = props.coords;
			
			this.isotopes = props.isotopes;
			/*
				nucleons: 'string'
				mass: 'string'
				abundance: 'string'
			*/
			
			// 1 = solid, 2 = liquid, 3 = gas
			// at room temp
			// number
			this.state = props.state;
			
			this.metallicCharacter = props.metallicCharacter;
			this.calculateWeightedMass = function(numberOfDecimalPlaces) {
				// add flag to round to certain number of decimal places?
					 if (!!this.isotopes) {
						var weightedMasses = [],
								total = 0;
						angular.forEach(this.isotopes, function(isotope) {
							weightedMasses.push(parseFloat(isotope.mass)*(parseFloat(isotope.abundance)/100));
						});
						
						angular.forEach(weightedMasses,function(m) {
							total += m;
						});
						
						return isNaN(numberOfDecimalPlaces) === false ? parseFloat(total).toFixed(numberOfDecimalPlaces) : total;
					} else {
						return this.mass;
					}			 
			};
			
			this.countIsotopes = function() {
				return this.isotopes.length;
			};
		}
		
		return Element;
	}]);

angular.module('periodicTable')
	.factory('elements',['Element',function(Element) {
		
		var elements = {
			get: function() {
			return [
				new Element({
					name: 'hydrogen',
					symbol: 'H',
					atomicNumber: '1',
					state: 3,
					metallicCharacter: 'nonmetal',
					coords: {
						group: 1,
						period: 1
					},
					isotopes: [
						 {
							nucleons: '1',
							mass: '1.007825',
							abundance: '99.99'
						},
						{
							nucleons: '2',
							mass: '2.014102',
							abundance: '0.015'
						}				 
					]
				}),
				new Element({
					name: 'helium',
					symbol: 'He',
					state: 3,
					metallicCharacter: 'nobleGas',
					atomicNumber: '2',
					coords: {
						group: 18,
						period: 1
					},
					isotopes: [
						{
							nucleons: '3',
							mass: '3.016029',
							abundance: '.00014 '
						},
						{
							nucleons: '4',
							mass: '4.002603',
							abundance: '99.99986'
						}
					]
				}),
				new Element({
					name: 'lithium',
					symbol: 'Li',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '3',
					coords: {
						group: 1,
						period: 2
					},
					isotopes: [
						{
							nucleons: '6',
							mass: '6.015123',
							abundance: '7.42'							
						},
						{
							nucleons: '7',
							mass: '7.016005',
							abundance: '92.58'
						}
					]
				}),
				new Element({
					name: 'beryllium',
					symbol: 'Be',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '4',
					coords: {
						group: 2,
						period: 2
					},
					isotopes: [
						{
							nucleons: '9',
							mass: '9.012183',
							abundance: '100'							
						}
					]
				}),
				new Element({
					name: 'boron',
					symbol: 'B',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '5',
					coords: {
						group: 13,
						period: 2
					},
					isotopes: [
						{
							nucleons: '10',
							mass: '10.012938',
							abundance: '19.80'							
						},
						{
							nucleons: '11',
							mass: '11.009305',
							abundance: '80.20'
						}
					]
				}),
				new Element({
					name: 'carbon',
					symbol: 'C',
					state: 1,
					metallicCharacter: 'nonmetal',
					atomicNumber: '6',
					coords: {
						group: 14,
						period: 2
					},
					isotopes: [
						{
							nucleons: '12',
							mass: '12',
							abundance: '98.90'							
						},
						{
							nucleons: '13',
							mass: '13.003355',
							abundance: '1.10'
						}
					]
				}),
				new Element({
					name: 'nitrogen',
					symbol: 'N',
					state: 3,
					metallicCharacter: 'nonmetal',
					atomicNumber: '7',
					coords: {
						group: 15,
						period: 2
					},
					isotopes: [
						{
							nucleons: '14',
							mass: '14.003074',
							abundance: '99.63'							
						},
						{
							nucleons: '15',
							mass: '15.000109',
							abundance: '.37'
						}
					]
				}),
				new Element({
					name: 'oxygen',
					symbol: 'O',
					state: 3,
					metallicCharacter: 'nonmetal',
					atomicNumber: '8',
					coords: {
						group: 16,
						period: 2
					},
					isotopes: [
						{
							nucleons: '16',
							mass: '15.994915',
							abundance: '99.76'							
						},
						{
							nucleons: '17',
							mass: '16.999131',
							abundance: '.038'
						},
						{
							nucleons: '18',
							mass: '17.999159',
							abundance: '0.20'
						}
					]
				}),
				new Element({
					name: 'fluorine',
					symbol: 'F',
					state: 3,
					metallicCharacter: 'halogen',
					atomicNumber: '9',
					coords: {
						group: 17,
						period: 2
					},
					isotopes: [
						{
							nucleons: '19',
							mass: '18.998403',
							abundance: '100'							
						}
					]
				}),
				new Element({
					name: 'neon',
					symbol: 'Ne',
					state: 3,
					metallicCharacter: 'nobleGas',
					atomicNumber: '10',
					coords: {
						group: 18,
						period: 2
					},
					isotopes: [
						{
							nucleons: '20',
							mass: '19.992439',
							abundance: '90.60'							
						},
						{
							nucleons: '21',
							mass: '20.993845',
							abundance: '.26'							
						},
						{
							nucleons: '22',
							mass: '21.991384',
							abundance: '9.20'							
						}
					]
				}),
				new Element({
					name: 'sodium',
					symbol: 'Na',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '11',
					coords: {
						group: 1,
						period: 3
					},
					isotopes: [
						{
							nucleons: '23',
							mass: '22.989770',
							abundance: '100'							
						}
					]
				}),
				new Element({
					name: 'magnesium',
					symbol: 'Mg',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '12',
					coords: {
						group: 2,
						period: 3
					},
					isotopes: [
						{
							nucleons: '24',
							mass: '23.985045',
							abundance: '78.90'							
						},
						{
							nucleons: '25',
							mass: '24.985839',
							abundance: '10.00'							
						},
						{
							nucleons: '26',
							mass: '25.982595',
							abundance: '11.10'							
						}
					]
				}),
				new Element({
					name: 'aluminum',
					symbol: 'Al',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '13',
					coords: {
						group: 13,
						period: 3
					},
					isotopes: [
						{
							nucleons: '27',
							mass: '26.981541',
							abundance: '100'							
						}
					]
				}),
				new Element({
					name: 'silicon',
					symbol: 'Si',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '14',
					coords: {
						group: 14,
						period: 3
					},
					isotopes: [
						{
							nucleons: '28',
							mass: '27.976928',
							abundance: '92.23'							
						},
						{
							nucleons: '29',
							mass: '28.976496',
							abundance: '4.67'							
						},
						{
							nucleons: '30',
							mass: '29.973772',
							abundance: '3.10'							
						}
					]
				}),
				new Element({
					name: 'phosphorus',
					symbol: 'P',
					state: 1,
					metallicCharacter: 'nonmetal',
					atomicNumber: '15',
					coords: {
						group: 15,
						period: 3
					},
					isotopes: [
						{
							nucleons: '31',
							mass: '30.973763',
							abundance: '100.00'							
						}
					]
				}),
				new Element({
					name: 'sulfur',
					symbol: 'S',
					state: 1,
					metallicCharacter: 'nonmetal',
					atomicNumber: '16',
					coords: {
						group: 16,
						period: 3
					},
					isotopes: [
						{
							nucleons: '32',
							mass: '31.972072',
							abundance: '95.02'							
						},
						{
							nucleons: '33',
							mass: '32.971459',
							abundance: '.75'							
						},
						{
							nucleons: '34',
							mass: '33.967868',
							abundance: '4.21'							
						}
					]
				}),
				new Element({
					name: 'chlorine',
					symbol: 'Cl',
					state: 3,
					metallicCharacter: 'halogen',
					atomicNumber: '17',
					coords: {
						group: 17,
						period: 3
					},
					isotopes: [
						{
							nucleons: '35',
							mass: '34.968853',
							abundance: '75.77'							
						},
						{
							nucleons: '37',
							mass: '36.965903',
							abundance: '24.23'							
						}
					]
				}),
				new Element({
					name: 'argon',
					symbol: 'Ar',
					state: 3,
					metallicCharacter: 'nobleGas',
					atomicNumber: '18',
					coords: {
						group: 18,
						period: 3
					},
					isotopes: [
						{
							nucleons: '36',
							mass: '35.967546',
							abundance: '.34'							
						},
						{
							nucleons: '38',
							mass: '37.962732',
							abundance: '.063'							
						},
						{
							nucleons: '40',
							mass: '39.962383',
							abundance: '99.60'							
						}
					]
				}),
				new Element({
					name: 'potassium',
					symbol: 'K',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '19',
					coords: {
						group: 1,
						period: 4
					},
					isotopes: [
						{
							nucleons: '39',
							mass: '38.9637074',
							abundance: '93.2581'							
						},
						{
							nucleons: '40',
							mass: '39.963998475',
							abundance: '0.0117'
						},
						{
							nucleons: '41',
							mass: '40.9618254',
							abundance: '6.7302'							
						}
					]
				}),
				new Element({
					name: 'calcium',
					symbol: 'Ca',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '20',
					coords: {
						group: 2,
						period: 4
					},
					isotopes: [
						{
							nucleons: '40',
							mass: '39.962591',
							abundance: '96.941'							
						},
						{
							nucleons: '42',
							mass: '41.958622',
							abundance: '.647'
						},
						{
							nucleons: '43',
							mass: '42.958770',
							abundance: '.135'							
						},
						{
							nucleons: '44',
							mass: '43.955485',
							abundance: '2.086'							
						},
						{
							nucleons: '46',
							mass: '45.953689',
							abundance: '0.004'
						},
						{
							nucleons: '48',
							mass: '47.952532',
							abundance: '.187'							
						}
					]
				}),
				new Element({
					name: 'scandium',
					symbol: 'Sc',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '21',
					coords: {
						group: 3,
						period: 4
					},
					isotopes: [
						{
							nucleons: '45',
							mass: '44.955911909',
							abundance: '100'							
						}
					]
				}),
				new Element({
					name: 'titanium',
					symbol: 'Ti',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '22',
					coords: {
						group: 4,
						period: 4
					},
					isotopes: [
						{
							nucleons: '46',
							mass: '45.952631555',
							abundance: '8.25'							
						},
						{
							nucleons: '47',
							mass: '46.951763088',
							abundance: '7.44'							
						},
						{
							nucleons: '48',
							mass: '47.947946281',
							abundance: '73.72'							
						},
						{
							nucleons: '49',
							mass: '48.947869982',
							abundance: '5.41'							
						},
						{
							nucleons: '50',
							mass: '49.944791194',
							abundance: '5.18'							
						}
					]
				}),
				new Element({
					name: 'vanadium',
					symbol: 'V',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '23',
					coords: {
						group: 5,
						period: 4
					},
					isotopes: [
						{
							nucleons: '50',
							mass: '49.947158485',
							abundance: '.25'							
						},
						{
							nucleons: '51',
							mass: '50.943959507',
							abundance: '99.75'							
						}
					]
				}),
				new Element({
					name: 'chromium',
					symbol: 'Cr',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '24',
					coords: {
						group: 6,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'manganese',
					symbol: 'Mn',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '25',
					coords: {
						group: 7,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'iron',
					symbol: 'Fe',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '26',
					coords: {
						group: 8,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'cobalt',
					symbol: 'Co',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '27',
					coords: {
						group: 9,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'nickel',
					symbol: 'Ni',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '28',
					coords: {
						group: 10,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'copper',
					symbol: 'Cu',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '29',
					coords: {
						group: 11,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'zinc',
					symbol: 'Zn',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '30',
					coords: {
						group: 12,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'gallium',
					symbol: 'Ga',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '31',
					coords: {
						group: 13,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'germanium',
					symbol: 'Ge',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '32',
					coords: {
						group: 14,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'arsenic',
					symbol: 'As',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '33',
					coords: {
						group: 15,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'selenium',
					symbol: 'Se',
					state: 1,
					metallicCharacter: 'nonmetal',
					atomicNumber: '34',
					coords: {
						group: 16,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'bromine',
					symbol: 'Br',
					state: 2,
					metallicCharacter: 'halogen',
					atomicNumber: '35',
					coords: {
						group: 17,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'krypton',
					symbol: 'Kr',
					state: 3,
					metallicCharacter: 'nobleGas',
					atomicNumber: '36',
					coords: {
						group: 18,
						period: 4
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'rubidium',
					symbol: 'Rb',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '37',
					coords: {
						group: 1,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'strontium',
					symbol: 'Sr',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '38',
					coords: {
						group: 2,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'yttrium',
					symbol: 'Y',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '39',
					coords: {
						group: 3,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'zirconium',
					symbol: 'Zr',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '40',
					coords: {
						group: 4,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'niobium',
					symbol: 'Nb',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '41',
					coords: {
						group: 5,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'molybdenum',
					symbol: 'Mo',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '42',
					coords: {
						group: 6,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'technetium',
					symbol: 'Tc',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '43',
					coords: {
						group: 7,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ruthenium',
					symbol: 'Ru',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '44',
					coords: {
						group: 8,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'rhodium',
					symbol: 'Rh',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '45',
					coords: {
						group: 9,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'palladium',
					symbol: 'Pd',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '46',
					coords: {
						group: 10,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'silver',
					symbol: 'Ag',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '47',
					coords: {
						group: 11,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'cadmium',
					symbol: 'Cd',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '48',
					coords: {
						group: 12,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'indium',
					symbol: 'In',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '49',
					coords: {
						group: 13,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'tin',
					symbol: 'Sn',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '50',
					coords: {
						group: 14,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'antimony',
					symbol: 'Sb',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '51',
					coords: {
						group: 15,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'tellurium',
					symbol: 'Te',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '52',
					coords: {
						group: 16,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'iodine',
					symbol: 'I',
					state: 1,
					metallicCharacter: 'halogen',
					atomicNumber: '53',
					coords: {
						group: 17,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'xenon',
					symbol: 'Xe',
					state: 3,
					metallicCharacter: 'nobleGas',
					atomicNumber: '54',
					coords: {
						group: 18,
						period: 5
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'caesium',
					symbol: 'Cs',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '55',
					coords: {
						group: 1,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'barium',
					symbol: 'Ba',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '56',
					coords: {
						group: 2,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'lanthanum',
					symbol: 'La',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '57',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'cerium',
					symbol: 'Ce',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '58',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'praseodymium',
					symbol: 'Pr',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '59',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'neodymium',
					symbol: 'Nd',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '60',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'promethium',
					symbol: 'Pm',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '61',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'samarium',
					symbol: 'Sm',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '62',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'europium',
					symbol: 'Eu',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '63',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'gadolinium',
					symbol: 'Gd',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '64',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'terbium',
					symbol: 'Tb',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '65',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'dysprosium ',
					symbol: 'Dy',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '66',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'holmium ',
					symbol: 'Ho',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '67',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'erbium ',
					symbol: 'Er',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '68',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'thulium',
					symbol: 'Tm',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '69',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ytterbium',
					symbol: 'Yb',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '70',
					coords: {
						group: 0,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'lutetium',
					symbol: 'Lu',
					state: 1,
					metallicCharacter: 'lanthanoid',
					atomicNumber: '71',
					coords: {
						group: 3,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'hafnium',
					symbol: 'Hf',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '72',
					coords: {
						group: 4,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'tantalum',
					symbol: 'Ta',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '73',
					coords: {
						group: 5,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'tungsten',
					symbol: 'W',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '74',
					coords: {
						group: 6,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'rhenium',
					symbol: 'Re',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '75',
					coords: {
						group: 7,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'osmium',
					symbol: 'Os',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '76',
					coords: {
						group: 8,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'iridium',
					symbol: 'Ir',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '77',
					coords: {
						group: 9,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'platinum',
					symbol: 'Pt',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '78',
					coords: {
						group: 10,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'gold',
					symbol: 'Au',
					state: 1,
					metallicCharacter: 'transition',
					atomicNumber: '79',
					coords: {
						group: 11,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'mercury',
					symbol: 'Hg',
					state: 2,
					metallicCharacter: 'transition',
					atomicNumber: '80',
					coords: {
						group: 12,
						period: 6
					},
					isotopes: [
						{
							nucleons: '196',
							mass: '195.965812',
							abundance: '.15'							
						},
						{
							nucleons: '198',
							mass: '197.966760',
							abundance: '10.10'							
						},
						{
							nucleons: '199',
							mass: '198.968269',
							abundance: '17.00'							
						},
						{
							nucleons: '200',
							mass: '199.968316',
							abundance: '23.10'							
						},
						{
							nucleons: '201',
							mass: '200.970293',
							abundance: '13.20'							
						},
						{
							nucleons: '202',
							mass: '201.970632',
							abundance: '29.65'							
						},
						{
							nucleons: '204',
							mass: '203.973481',
							abundance: '6.80'							
						}
					]
				}),
				new Element({
					name: 'thallium',
					symbol: 'Tl',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '81',
					coords: {
						group: 13,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'lead',
					symbol: 'Pb',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '82',
					coords: {
						group: 14,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'bismuth',
					symbol: 'Bi',
					state: 1,
					metallicCharacter: 'postTransition',
					atomicNumber: '83',
					coords: {
						group: 15,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'polonium',
					symbol: 'Po',
					state: 1,
					metallicCharacter: 'metalloid',
					atomicNumber: '84',
					coords: {
						group: 16,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'astatine',
					symbol: 'At',
					state: 1,
					metallicCharacter: 'halogen',
					atomicNumber: '85',
					coords: {
						group: 17,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'radon',
					symbol: 'Rn',
					state: 1,
					metallicCharacter: 'nobleGas',
					atomicNumber: '86',
					coords: {
						group: 18,
						period: 6
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'francium',
					symbol: 'Fr',
					state: 1,
					metallicCharacter: 'alkali',
					atomicNumber: '87',
					coords: {
						group: 1,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'radium',
					symbol: 'Ra',
					state: 1,
					metallicCharacter: 'alkaline',
					atomicNumber: '88',
					coords: {
						group: 2,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'actinium',
					symbol: 'Ac',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '89',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'thorium',
					symbol: 'Th',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '90',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'protactinium',
					symbol: 'Pa',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '91',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'uranium',
					symbol: 'U',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '92',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'neptunium',
					symbol: 'Np',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '93',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'plutonium',
					symbol: 'Pu',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '94',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'americium',
					symbol: 'Am',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '95',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'curium',
					symbol: 'Cm',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '96',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'berkelium',
					symbol: 'Bk',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '97',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'californium',
					symbol: 'Cf',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '98',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'einsteinium',
					symbol: 'Es',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '99',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'fermium',
					symbol: 'Fm',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '100',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'mendelevium',
					symbol: 'Md',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '101',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'nobelium',
					symbol: 'No',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '102',
					coords: {
						group: 0,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'lawrencium',
					symbol: 'Lr',
					state: 1,
					metallicCharacter: 'actinoid',
					atomicNumber: '103',
					coords: {
						group: 3,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'rutherfordium',
					symbol: 'Rf',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '104',
					coords: {
						group: 4,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'dubnium',
					symbol: 'Db',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '105',
					coords: {
						group: 5,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'seaborgium',
					symbol: 'Sg',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '106',
					coords: {
						group: 6,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'bohrium',
					symbol: 'Bh',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '107',
					coords: {
						group: 7,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'hassium',
					symbol: 'Hs',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '108',
					coords: {
						group: 8,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'meitnerium',
					symbol: 'Mt',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '109',
					coords: {
						group: 9,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'darmstadtium',
					symbol: 'Ds',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '110',
					coords: {
						group: 10,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'roentgenium',
					symbol: 'Rg',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '111',
					coords: {
						group: 11,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'copernicium',
					symbol: 'Cn',
					state: 4,
					metallicCharacter: 'transition',
					atomicNumber: '112',
					coords: {
						group: 12,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ununtrium',
					symbol: 'Uut',
					state: 4,
					metallicCharacter: 'postTransition',
					atomicNumber: '113',
					coords: {
						group: 13,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'flerovium',
					symbol: 'Fl',
					state: 4,
					metallicCharacter: 'postTransition',
					atomicNumber: '114',
					coords: {
						group: 14,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ununpentium',
					symbol: 'Uup',
					state: 4,
					metallicCharacter: 'postTransition',
					atomicNumber: '115',
					coords: {
						group: 15,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'livermorium',
					symbol: 'Lv',
					state: 4,
					metallicCharacter: 'postTransition',
					atomicNumber: '116',
					coords: {
						group: 16,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ununseptium',
					symbol: 'Uus',
					state: 4,
					metallicCharacter: 'halogen',
					atomicNumber: '117',
					coords: {
						group: 17,
						period: 7
					},
					isotopes: [
						
					]
				}),
				new Element({
					name: 'ununoctium',
					symbol: 'Uuo',
					state: 4,
					metallicCharacter: 'nobleGas',
					atomicNumber: '118',
					coords: {
						group: 18,
						period: 7
					},
					isotopes: [
						
					]
				})
			];				
			}
		};
		
		return elements;
		
	}]);

angular.module('periodicTable')
	.factory('views',[function() {
		/*
			All view names (e.g. state, metallicCharacter, etc.) must correspond to a property of an Element, and the values must correspond to those properties
			
			For example:
				== Element ==
				name: 'hydrogen',
				state: 3 //gas
				
				== views ==
				state: {
					value: {
						1: {
							// DOM properties, like fill colors, etc.
						}
						//etc.
				}
		*/
		
		var views = {
			// doesn't follow recursive get pattern...
			// maybe use getAll and get
			get: function() {
				return [
					{
						name: 'metallicCharacter',
						// http://www.colorpicker.com/
						values: {
							nonmetal: {
								fill: /*'#e3fab6'*/ '#bdfab6'
							},
							metalloid: {
								fill: /*'#f7fab6'*/ '#f0fab6'
							},
							halogen: {
								fill: /*'#b6facf'*/ '#b6fae6'
							},
							nobleGas: {
								fill: '#b6f5fa'
							},
							alkali: {
								fill: /*'#fab6b6'*/ '#c4b9b9'
							},
							alkaline: {
								fill: /*'#faceb6'*/ '#e6b5b5'
							},
							transition: {
								fill: /*'#fae4b6'*/ '#fab6b6'
							},
							postTransition: {
								fill: /*'#ffce69'*/ '#fadab6'
							},
							lanthanoid: {
								fill: /*'#fae4b6'*/ '#e89292'
							},
							actinoid: {
								fill: /*'#ffce69'*/ '#de7e7e'
							}
						}
					},
					{
						name: 'state',
						// 1 = solid
						// 2 = liquid
						// 3 = gas
						// 4 = unknown
						values: {
							1: {
								fill: '#777'
							},
							2: {
								fill: '#aaa'
							},
							3: {
								fill: '#ddd'
							},
							4: {
								fill: '#fff'
							}
						}
					}
				];
			}
		};
		
		return views;

	}]);

angular.module('periodicTable')
	.factory('helpers',[function() {
		return {
			get: function(prop) {
				if(prop in this) return this[prop];
			},
			set: function(prop,val) {
				if(prop in this) {
					if(arguments.length === 1) {
						return this[prop];
					} else if(arguments.length === 2) {
						this[prop] = val;
						
						return this;
					}
				}
			}
		};
	}]);

angular.module('periodicTable')
	.factory('viewChanger',['views','helpers',function(views,helpers) {
		var v = views.get();
		
		return {
			get: function(prop) {
				return helpers.get.call(this,prop);
			},
			// make a factory
			set: function(prop,val) {
				return helpers.set.call(this,prop,val);
			},
			currentView: v[0].name,
			zoom: {
				get: function(prop) {
					return helpers.get.call(this,prop);
				},
				set: function(prop,val) {
					return helpers.set.call(this,prop,val);
				},
				factor: 6,
				'in': function() {
					this.factor++;
				},
				out: function() {
					if(this.factor > 1) this.factor--;
				}
			}
		};
	}]);

angular.module('periodicTable')
	.factory('colorLum',[function() {
		//http://www.sitepoint.com/javascript-generate-lighter-darker-color/
		return function ColorLuminance(hex, lum) {

			// validate hex string
			hex = String(hex).replace(/[^0-9a-f]/gi, '');
			if (hex.length < 6) {
				hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
			}
			lum = lum || 0;

			// convert to decimal and change luminosity
			var rgb = "#", c, i;
			for (i = 0; i < 3; i++) {
				c = parseInt(hex.substr(i*2,2), 16);
				c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
				rgb += ("00"+c).substr(c.length);
			}

			return rgb;
		}
	}]);

angular.module('periodicTable')
	.controller('PeriodicCtrl',['$scope','elements','viewChanger','views',function($scope,elements,viewChanger,views) {
		
		//should i watch entire object for overall changes?
		$scope.$watch(function() {
			return viewChanger.get('zoom').get('factor');
		},function(newVal,oldVal) {
			 $scope.table = {
				width: 180*newVal,
				height: 100*newVal
			};		 
		});
		
		$scope.currentView = viewChanger.get('currentView');

		$scope.views = views.get();
		
		$scope.elements = elements.get();
		
		$scope.changeView = function(name) {
			viewChanger.set('currentView',name);
			$scope.currentView = viewChanger.get('currentView');
		};
		
		$scope.zoom = function(where) {
			if(where === 'in') {
				viewChanger.zoom.in();
			} else if (where === 'out') {
				viewChanger.zoom.out();
			}
		};

	}]);

angular.module('periodicTable')
	.directive('periodicTable',[function() {
		return {
			restrict: 'A',
			link: function() {
				
			}
		};
	}]);

angular.module('periodicTable')
	.directive('viewChanger',['viewChanger',function(viewChanger) {
		return {
			restrict: 'a',
			link: function(scope, element, attrs) {
				
			}
		};
	}]);

angular.module('periodicTable')
	.directive('element',['helpers','views','viewChanger','colorLum',function(helpers,views,viewChanger,colorLum) {
		return {
			restrict: 'A',
			scope: {
				scopeElement:'=element'
			},
			//require: parent scope?,
			link: function(scope,element,attrs) {
				var properties = {
					get: function(prop) {
						return helpers.get.call(this,prop);
					},
					set: function(prop,val) {
						return helpers.set.call(this,prop,val);
					},
					factor: '',
					width: function() {
						return 10*this.factor;
					},
					height: function() {
						return 10*this.factor;
					},
					fill: '',
					currentView: '',
					coordinate: function(xOrY) {
						var dim,
								val,
								elm = scope.scopeElement,
								mC = elm.metallicCharacter,
								coord;

						if(xOrY === 'x') {
							dim = this.width(); //global
							coord = elm.coords.group;
						} else if (xOrY === 'y') {
							dim = this.height(); //global
							coord = elm.coords.period;
						}

						if(mC !== 'actinoid' && mC !== 'lanthanoid') {
							val = (coord-1)*dim;
						} else if (mC === 'actinoid' || mC === 'lanthanoid') {
							if(xOrY === 'x') {
								val = (+elm.atomicNumber-(+elm.atomicNumber < 89 ? 55 : 87))*dim; 
							} else if (xOrY === 'y') {
								val = (coord+2)*dim;
							}
						}

						return val;
					}
				},
				v = views.get();
				
				
				scope.$watch(function() {
					return viewChanger;
				}, function(newVal,oldVal) {					
					var fill,
						cV = newVal.get('currentView'),
						f = newVal.get('zoom').get('factor');
					
					properties.set('currentView',cV);
					properties.set('factor',f);
					
					// not very dynamic; can only go down 1 level, etc.
					$.map(v,function(a,b) {
						if(a.name === cV) {
							fill = a.values[scope.scopeElement[cV]].fill;
						}
					});
					
					properties.set('fill',fill);
					
					if(element[0].tagName === 'rect') {
						rect(element,properties);
					}

					if(element[0].tagName === 'text') {
						text(element,properties);
					}
				},true);
				
				function rect(svg,props) {
					$(svg)
					.attr('width',props.width())
					.attr('height',props.height())
					.attr('x',props.coordinate('x'))
					.attr('y',props.coordinate('y'))
					.attr('fill',props.get('fill'));		
				}
				
				function text(svg,props) {
					var centerX = props.coordinate('x')+props.width()/2;
					
					$(svg)
					.attr('x',centerX)
					.attr('y',props.coordinate('y')+props.height()*.1)
					.attr('text-anchor','middle')
					
					$(svg)
					.children('.tspan-small')
					.attr('font-size',props.width()*.15)
					
					$(svg)
					.children('.tspan-big')
					.attr('font-size',props.width()*.2);
					
					$(svg)
					.children('tspan')
					.attr('alignment-baseline','hanging')
					.attr('x',centerX)
					.each(function(i) {
						if(i > 0) {
							$(this)
							.attr('dy',props.height()*.2);
						}
					});
					
				}
				
			}
		};
	}]);

//angular.module('periodicTable')
//	.directive('key',[function() {
//		return {
//			restrict: 'a',
//			scope: {
//				view: '='	
//			},
//			link: function(scope,element,attrs) {
//				console.log(scope.view);
//			}
//		};
//	}]);

angular.module('periodicTable')
	.filter('camelToNormal',[function() {
		return function(text) {
			return text.replace(/([A-Z])/g, ' $1').toLowerCase();
		};
	}]);