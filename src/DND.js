import { useState } from "react";
import { useDrop } from "react-dnd";
import WedgetsList from "./WedgetsList";
import DraggableComponent  from "./components/DraggableComponent";
import { DesignArea } from "./components/DesignArea";
import { Sidebar } from"./components/Sidebar";
import { Container } from "postcss";


function DND() {
    const [sidebar, setSidebar] = useState([  
    <WedgetsList wedgets={wedgets}/>
]);
  
    const [designArea, setDropArea] = useState([]);
  
    const [{ isOver }, addToDropAreaRef] = useDrop({
      accept: "sidebar",
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });
  
    console.log(isOver);
    const [{ isOver: iscomponentOver }, removeFromDropArea] = useDrop({
      accept: "designArea",
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });
  
    const moveComponentDropArea = (item) => {
      console.log(item);
      // setSidebar((prev) => prev.filter((_, i) => item.index !== i));
      setDropArea((prev) => [...prev, item]);
    };
    // const removeComponentfromSidebar = (item) => {
    //   setDropArea((prev) => prev.filter((_, i) => item.index !== i));
    //   setSidebar((prev) => [...prev, item]);
    // };
  
    return (
      <Container>
      <Sidebar>
          <List
              bgGradient={
                isSidebarOver
                  ? "linear(to-b, yellow.300, yellow.500)"
                  : "linear(to-b, yellow.100, yellow.200)"
              }
              ref={removeFromDropArea}
              p="4"
              minH="70vh"
              boxShadow="xl"
              borderRadius="md"
            >
              {sidebar.map((p, i) => (
                <DraggableComponent
                  item={p}
                  key={i}
                  SidebarType="sidebar"
                  onDropSidebar={moveComponentDropArea}
                  index={i}
                />
              ))}
            </List>
   </Sidebar>
   <DesignArea>
        <List
          bgGradient={
            isOver
              ? "linear(to-b, teal.300, teal.500)"
              : "linear(to-b, teal.100, teal.200)"
          }
          ref={addToDropAreaRef}
          minH="70vh"
          boxShadow="xl"
          borderRadius="md"
          p="4"
        >
          {designArea.map((p, i) => (
            <DraggableComponent
              item={p}
              key={i}
              index={i}
              SidebarType="sidebar"
              // onDropSidebar={removeComponentfromSidebar}
            />
          ))}
        </List>
        </DesignArea>
    </Container>
      
         
      
    
    );
  }
  
  export default DND;
  
