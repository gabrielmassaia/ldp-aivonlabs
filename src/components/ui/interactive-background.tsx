"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const GRID_SPACING = 40
const DOT_SIZE = 2
const INFLUENCE_RADIUS = 350 // Increased radius to account for dead zone
const DEAD_ZONE_RADIUS = 80 // No effect within this radius
const GRAVITY_STRENGTH = 0.6 // Slightly stronger pull to compensate

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 })
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const cols = Math.ceil(dimensions.width / GRID_SPACING)
  const rows = Math.ceil(dimensions.height / GRID_SPACING)
  const dots = []

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      dots.push({
        x: i * GRID_SPACING + GRID_SPACING / 2,
        y: j * GRID_SPACING + GRID_SPACING / 2,
        id: `${i}-${j}`,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950"
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full">
        {dots.map((dot) => (
          <Dot
            key={dot.id}
            x={dot.x}
            y={dot.y}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </svg>
    </div>
  )
}

function Dot({
  x,
  y,
  mouseX,
  mouseY,
}: {
  x: number
  y: number
  mouseX: any
  mouseY: any
}) {
  const distance = useTransform(
    [mouseX, mouseY],
    ([mx, my]: number[]) => {
      const dx = mx - x
      const dy = my - y
      return Math.sqrt(dx * dx + dy * dy)
    }
  )

  const xOffset = useTransform(
    [mouseX, mouseY],
    ([mx, _]: number[]) => {
      const dx = mx - x
      const dy = mouseY.get() - y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < DEAD_ZONE_RADIUS || dist > INFLUENCE_RADIUS) return 0
      return dx * (1 - (dist - DEAD_ZONE_RADIUS) / (INFLUENCE_RADIUS - DEAD_ZONE_RADIUS)) * GRAVITY_STRENGTH
    }
  )

  const yOffset = useTransform(
    [mouseX, mouseY],
    ([_, my]: number[]) => {
      const dx = mouseX.get() - x
      const dy = my - y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < DEAD_ZONE_RADIUS || dist > INFLUENCE_RADIUS) return 0
      return dy * (1 - (dist - DEAD_ZONE_RADIUS) / (INFLUENCE_RADIUS - DEAD_ZONE_RADIUS)) * GRAVITY_STRENGTH
    }
  )

  const scale = useTransform(distance, [DEAD_ZONE_RADIUS, INFLUENCE_RADIUS], [1.5, 1])
  const opacity = useTransform(distance, [DEAD_ZONE_RADIUS, INFLUENCE_RADIUS], [0.5, 0.15])
  
  // Ensure dead zone has default values
  const finalScale = useTransform(distance, (d) => d < DEAD_ZONE_RADIUS ? 1 : scale.get())
  const finalOpacity = useTransform(distance, (d) => d < DEAD_ZONE_RADIUS ? 0.15 : opacity.get())

  const fill = useTransform(distance, [DEAD_ZONE_RADIUS, INFLUENCE_RADIUS], ["#0F6D7A", "#1E1E22"])
  const finalFill = useTransform(distance, (d) => d < DEAD_ZONE_RADIUS ? "#1E1E22" : fill.get())

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={DOT_SIZE}
      fill={finalFill}
      style={{
        x: xOffset,
        y: yOffset,
        scale: finalScale,
        opacity: finalOpacity,
      }}
    />
  )
}
