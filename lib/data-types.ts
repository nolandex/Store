// Extended type definitions for JSON data management
export interface CourseExtended {
  id: string
  title: string
  price: number
  imageUrl: string
  categoryId: string
  description: string
  instructor: string
  duration: string
  level: "Easy" | "Medium" | "Hard"
  rating: number
  students: number
  capitalCost: "Tanpa Modal" | "Modal Kecil" | "Modal Sedang" | "Modal Besar"
  capitalAmount: string
  tags?: string[]
  featured?: boolean
  status?: "active" | "inactive" | "draft"
  createdAt?: string
  updatedAt?: string
}

export interface CategoryExtended {
  id: string
  name: string
  icon: string
  description?: string
  color?: string
  order?: number
  status?: "active" | "inactive"
}

export interface CourseFilters {
  categoryId?: string
  level?: string
  priceRange?: { min: number; max: number }
  capitalCost?: string
  rating?: number
  search?: string
}

export interface CourseSortOptions {
  sortBy: "price" | "rating" | "students" | "title" | "createdAt"
  order: "asc" | "desc"
}
