import coursesData from "@/data/courses.json"
import categoriesData from "@/data/categories.json"
import type { Course, Category } from "./data"

export class CourseDataManager {
  private courses: Course[]
  private categories: Category[]

  constructor() {
    this.courses = coursesData.courses as Course[]
    this.categories = [...categoriesData.mainCategories, ...categoriesData.additionalCategories] as Category[]
  }

  // Course management methods
  getAllCourses(): Course[] {
    return this.courses.filter((course) => course.status === "active")
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find((course) => course.id === id && course.status === "active")
  }

  getCoursesByCategory(categoryId: string): Course[] {
    return this.courses.filter((course) => course.categoryId === categoryId && course.status === "active")
  }

  getFeaturedCourses(): Course[] {
    return this.courses.filter((course) => course.featured && course.status === "active")
  }

  searchCourses(query: string): Course[] {
    const searchTerm = query.toLowerCase()
    return this.courses.filter(
      (course) =>
        course.status === "active" &&
        (course.title.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm) ||
          course.tags?.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          course.instructor.toLowerCase().includes(searchTerm)),
    )
  }

  // Category management methods
  getAllCategories(): Category[] {
    return this.categories.filter((category) => category.status === "active")
  }

  getMainCategories(): Category[] {
    return categoriesData.mainCategories.filter((category) => category.status === "active") as Category[]
  }

  getAdditionalCategories(): Category[] {
    return categoriesData.additionalCategories.filter((category) => category.status === "active") as Category[]
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find((category) => category.id === id && category.status === "active")
  }

  // Filter methods
  filterCourses(filters: {
    categoryId?: string
    level?: string
    priceRange?: { min: number; max: number }
    capitalCost?: string
    rating?: number
  }): Course[] {
    let filtered = this.getAllCourses()

    if (filters.categoryId) {
      filtered = filtered.filter((course) => course.categoryId === filters.categoryId)
    }

    if (filters.level) {
      filtered = filtered.filter((course) => course.level === filters.level)
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (course) => course.price >= filters.priceRange!.min && course.price <= filters.priceRange!.max,
      )
    }

    if (filters.capitalCost) {
      filtered = filtered.filter((course) => course.capitalCost === filters.capitalCost)
    }

    if (filters.rating) {
      filtered = filtered.filter((course) => course.rating >= filters.rating!)
    }

    return filtered
  }

  // Sort methods
  sortCourses(
    courses: Course[],
    sortBy: "price" | "rating" | "students" | "title",
    order: "asc" | "desc" = "desc",
  ): Course[] {
    return [...courses].sort((a, b) => {
      let comparison = 0

      switch (sortBy) {
        case "price":
          comparison = a.price - b.price
          break
        case "rating":
          comparison = a.rating - b.rating
          break
        case "students":
          comparison = a.students - b.students
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
      }

      return order === "asc" ? comparison : -comparison
    })
  }

  // Statistics methods
  getCourseStats() {
    const courses = this.getAllCourses()
    return {
      totalCourses: courses.length,
      totalStudents: courses.reduce((sum, course) => sum + course.students, 0),
      averageRating: courses.reduce((sum, course) => sum + course.rating, 0) / courses.length,
      averagePrice: courses.reduce((sum, course) => sum + course.price, 0) / courses.length,
      coursesByLevel: {
        Easy: courses.filter((c) => c.level === "Easy").length,
        Medium: courses.filter((c) => c.level === "Medium").length,
        Hard: courses.filter((c) => c.level === "Hard").length,
      },
      coursesByCapital: {
        "Tanpa Modal": courses.filter((c) => c.capitalCost === "Tanpa Modal").length,
        "Modal Kecil": courses.filter((c) => c.capitalCost === "Modal Kecil").length,
        "Modal Sedang": courses.filter((c) => c.capitalCost === "Modal Sedang").length,
        "Modal Besar": courses.filter((c) => c.capitalCost === "Modal Besar").length,
      },
    }
  }
}

// Export singleton instance
export const courseDataManager = new CourseDataManager()
