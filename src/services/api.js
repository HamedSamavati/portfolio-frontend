import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add request interceptor for better error handling
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 405) {
      console.error(
        "Method not allowed. Endpoint might not support this operation:",
        {
          url: error.config.url,
          method: error.config.method,
        }
      );
    }
    return Promise.reject(error);
  }
);

// Projects :
export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const createProject = async (project) => {
  const response = await api.post("/projects", project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await api.put(`/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};

//BlogPosts :
export const getBlogPosts = async () => {
  const response = await api.get("/blog-posts");
  return response.data;
};

export const getBlogPostById = async (id) => {
  const response = await api.get(`/blog-posts/${id}`);
  return response.data;
};
export const createBlogPost = async (post) => {
  const response = await api.post("/blog-posts", post);
  return response.data;
};

export const updateBlogPost = async (id, post) => {
  const response = await api.put(`/blog-posts/${id}`, post);
  return response.data;
};

export const deleteBlogPost = async (id) => {
  const response = await api.delete(`/blog-posts/${id}`);
  return response.data;
};

//Skills
export const getSkills = async () => {
  const response = await api.get("/skills");
  return response.data;
};

export const getSkillById = async (id) => {
  const response = await api.get(`/skills/${id}`);
  return response.data;
};

export const createSkill = async (skill) => {
  const response = await api.post("/skills", skill);
  return response.data;
};
export const updateSkill = async (id, skill) => {
  const response = await api.put(`/skills/${id}`, skill);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = api.delete(`/skills/${id}`);
  return response.data;
};
//subscription
export const getSubscriptions = async () => {
  const response = await api.get("/subscriptions");
  return response.data;
};
export const getSubscriptionById = async (id) => {
  const response = await api.get(`/subscriptions/${id}`);
  return response.data;
};
export const createSubscription = async (subscription) => {
  const response = await api.post("/subscriptions", subscription);
  return response.data;
};
export const updateSubscription = async (id, subscription) => {
  const response = await api.put(`/subscriptions/${id}`, subscription);
  return response.data;
};
export const deleteSubscription = async (id) => {
  const response = await api.delete(`/subscriptions/${id}`);
  return response.data;
};

//testimonials
export const getTestimonials = async () => {
  const response = await api.get("/testimonials");
  return response.data;
};
export const getTestimonialById = async (id) => {
  const response = await api.get(`/testimonials/${id}`);
  return response.data;
};
export const createTestimonial = async (testimonial) => {
  const response = await api.post("/testimonials", testimonial);
  return response.data;
};
export const updateTestimonial = async (id, testimonial) => {
  const response = await api.put(`/testimonials/${id}`, testimonial);
  return response.data;
};
export const deleteTestimonial = async (id) => {
  const response = await api.delete(`/testimonials/${id}`);
  return response.data;
};

//users
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await api.post("/users", user);
  return response.data;
};

export const registerUser = async (user) => {
  try {
    const response = await api.post("/register", user);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
    });
    throw error;
  }
};
export const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};
export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export const loginUser = async (user) => {
  try {
    const response = await api.post("/login", user);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    console.error("Login request failed:", {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
    });
    throw error;
  }
};

export const logoutUser = async () => {
  const response = await api.post("/users/logout");
  return response.data;
};

//Experience :
