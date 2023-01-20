import React from 'react'
import "./Addlist.css"

const Addlist = () => {
return (
    <>  {/* input to add tasks */}
    <section>
        <form>
            <div className='contariner'>

                <div className='inputcontainer'>

                    <div className='textadd'>

                        <label for="uname" >Añadir tarea</label>
                    </div>
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