interface Props {
  x: number
  y: number
  size: number
  handleClick: (e: React.MouseEvent<SVGRectElement>) => void
  className: string
}

function MoveySquare(props: Props) {
  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <rect
        data-testid="square-rect"
        role="img"
        x={props.x}
        y={props.y}
        width={props.size}
        height={props.size}
        onClick={props.handleClick}
        className={`${props.className} dark:fill-white`}
      >
        {' '}
        <animateMotion
          path="M0,0 0 50 0 0"
          begin="0s"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animateMotion
          path="M0,0 50 0 0 0"
          begin="0s"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}

export default MoveySquare
