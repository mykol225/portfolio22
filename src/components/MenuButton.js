import { motion, Transition, SVGMotionProps } from "framer-motion";

const MenuButton = ({
    isOpen = false,
    width = 24,
    height = 24,
    strokeWidth = 1,
    color = "000",
    transition = null,
    lineProps = null,
    onClick,
  }) => {
    const variant = isOpen ? "opened" : "closed";
    const top = {
      closed: {
        rotate: 0,
        translateY: 0
      },
      opened: {
        rotate: 45,
        translateY: 8
      },
    };
    const bottom = {
      closed: {
        rotate: 0,
        translateY: 0
      },
      opened: {
        rotate: -45,
        translateY: -8
      },
    };
    lineProps = {
      stroke: color,
      strokeWidth: parseInt(strokeWidth),
      vectorEffect: "non-scaling-stroke",
      initial: "closed",
      animate: variant,
      transition,
      ...lineProps
    }

  return(
    <>
      <motion.svg
        className='menu-btn'
        viewBox={`0 0 ${width} ${height}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        onClick={onClick}
      >
        <motion.line
          x1="10"
          x2="54"
          y1="24"
          y2="24"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="10"
          x2="54" //need to make it scalable based on height and width: x1 is distance from left, x2 is 
          y1="40"
          y2="40"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </>
  )
}

export default MenuButton