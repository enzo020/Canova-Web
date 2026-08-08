const API_URL = 'http://localhost:8080/api';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return response.json();
}

export async function createLead(leadData) {
  const response = await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar mensagem');
  }

  return response.json();
}

export async function login(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha inválidos');
  }

  return response.json();
}

export async function createProduct(productData, token) {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar produto');
  }

  return response.json();
}

export async function updateProduct(id, productData, token) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error('Erro ao atualizar produto');
  }

  return response.json();
}

export async function deleteProduct(id, token) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao excluir produto');
  }
}

export async function getLines() {
  const response = await fetch(`${API_URL}/line`);
  if (!response.ok) {
    throw new Error('Erro ao buscar linhas');
  }
  return response.json();
}

export async function getLeads(token) {
  const response = await fetch(`${API_URL}/leads`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar leads');
  }

  return response.json();
}

export async function deleteLead(id, token) {
  const response = await fetch(`${API_URL}/leads/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao excluir lead');
  }
}