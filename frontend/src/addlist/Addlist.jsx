import React from 'react'
import "./Addlist.css"

const Addlist = () => {
return (
    <>
    <section>
        <form>
            <div className='contariner'>

                <div className='inputcontainer'>
                    <label for="uname">Añadir tarea</label>
                    
                    <div className='addlist'>
                        
                        <input type="text" id="uname" name="name"
                            placeholder="Añade una tarea"
                            size="30"/>
                            
                                <input  className='add' type="submit" value="+" />
                            
                    </div>
                </div>
            </div>
        </form>
    </section>

    </>
)
}

export default Addlist