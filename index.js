const list = [
  { ip: '192.168.22.1', name: 'zzz' },
  { ip: '5.220.100.50', name: 'quuz' },
  { ip: '5.24.69.2',    name: 'foo' },
  { ip: '5.24.69.2',    name: 'foo' },
  { ip: '5.220.100.50', name: 'bar' },
  { ip: '192.168.22.1', name: 'foo' },
  { ip: '5.220.100.50', name: 'baz' },
  { ip: '5.220.100.50', name: 'foo' },
  { ip: '192.168.22.1', name: 'aaa' },
];

 function sortArray(arr) {

      function byField(field1, field2) {
            return function (a,b) {
                /* если значения IP равны*/
            if (a[field1] === b[field1]) {
                /**проверяеv по name */
                    if (a[field2] < b[field2]) {
                        return 1
                    } else {
                        return -1
                    }
            }  else  {
            /**если значения IP не равны 
                проверяем только по IP  */ 
                    if (a[field1] > b[field1]) {
                        return 1
                    } else {
                        return -1
                    } 
            }
            }
        }
        
    return [...arr].sort( byField('ip','name'))
 }

 const expected = sortArray(list)
 console.log(expected ); 
