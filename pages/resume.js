import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Template1 from './templates/template1'

export default function resume(){

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  

    return(
        <>
            <div>
                <button onClick={handlePrint}>Print this out!</button>
            </div>
            <Template1  ref={componentRef} />
            
        </>
    )
}