// polygon utilies, used for cleaning up region data
// will be broken out to its own library

export interface Point {
  x: number,
  y: number
}

export type Polygon = Point[]

// this is the "area" of the triangle formced by 0, a, and b
// it will be negative if ab goes from right-to-left

export function _area(a: Point, b: Point): number {
  return a.y * b.x - 0.5 * (a.x * a.y + b.x * b.y + (b.x - a.x) * (a.y - b.y))
}

export function stringToPolygon(source: string): Polygon {
  const [polygon, leftover] = source.split(',').reduce((acc: [Polygon, number | undefined], num: string): [Polygon, number | undefined] => {
    const [p, x] = acc
    if (x === undefined) {
      return [p, Number(num)]
    } else {
      p.push({x, y: Number(num)})
      return [p, undefined]
    }
  }, [[] as Polygon, undefined])
  if (polygon.length < 3) {
    throw new Error('too few coordinates (expected at least six)')
  }
  if (leftover !== undefined) {
    throw new Error('odd number of coordinates (expected even)')
  }
  return polygon
}

export function polygonToString(points: Polygon): string {
  return points.map(p => `${p.x},${p.y}`).join(',')
}

export function simplify(points: Polygon, threshold = 0.5): Polygon {
  if (points.length < 4) {
    return points
  }
  return points.reduce((poly: Polygon, p: Point): Polygon => {
    if (poly.length < 2) {
      poly.unshift(p)
    } else {
      if (area(p, poly[0], poly[1]) < threshold) {
        poly[0] = p
      } else {
        poly.unshift(p)
      }
    }
    return poly
  }, [] as Polygon)
}

export function area(...points: Polygon): number {
  if (points.length < 3) {
    return 0
  } else {
    return Math.abs(points.reduce((totalArea, p, index) => {
      const q = index === 0 ? points[points.length - 1] : points[index - 1]
      return totalArea + _area(p, q)
    }, 0))
  }
}