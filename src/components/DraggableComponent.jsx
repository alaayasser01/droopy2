// import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";
// import { DesignArea } from "./components/DesignArea";
// import { Sidebar } from"./components/Sidebar";
// import { DND } from"../DND"

const DraggableComponent = ({ item, SidebarType, onDropSidebar, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: SidebarType,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropSidebar(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <List
      ref={dragRef}
      bg={
        isDragging
          ? SidebarType === "SidebarType"
            ? "yellow.600"
            : "teal.400"
          : "white"
      }
      color={isDragging ? "white" : "black"}
    >
      {item.title}
    </List>
  );
};

export default DraggableComponent;
