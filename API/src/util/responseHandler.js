const buildResponse = (code, message, data, error) => {
  return {
    status_code: code,
    message: message,
    data: data,
    error: error
  }
}

export default buildResponse