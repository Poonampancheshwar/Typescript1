const checkTypes = () =>{

    type STATUSADD = 'status-add';
    type STATUSSUB = 'status-sub';
    let status: 'add'| 'sub' | 'mul' | 'div' | STATUSADD | STATUSSUB = 'add';
    status ='sub';
    status ='mul';
    status ='status-add';
    status ='status-sub';
    let string1 = 'string1';
    console.log('status' ,status,typeof status);
    
    console.log('string1' ,string1,typeof status);
}
checkTypes();
