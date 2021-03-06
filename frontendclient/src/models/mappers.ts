/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const Candidate: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Candidate",
    modelProperties: {
      name: {
        constraints: {
          MinLength: 1
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      yearsExperience: {
        serializedName: "years_experience",
        required: true,
        type: {
          name: "String"
        }
      },
      custom: {
        constraints: {
          MinLength: 1
        },
        serializedName: "custom",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Client: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Client",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      jobs: {
        serializedName: "jobs",
        readOnly: true,
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Job"
            }
          }
        }
      },
      name: {
        constraints: {
          MaxLength: 120,
          MinLength: 1
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Job: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Job",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      name: {
        constraints: {
          MaxLength: 240,
          MinLength: 1
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      template: {
        constraints: {
          MinLength: 1
        },
        serializedName: "template",
        required: true,
        type: {
          name: "String"
        }
      },
      hasDraft: {
        serializedName: "hasDraft",
        type: {
          name: "Boolean"
        }
      },
      templateDraft: {
        constraints: {
          MinLength: 1
        },
        serializedName: "templateDraft",
        type: {
          name: "String"
        }
      },
      subject: {
        constraints: {
          MaxLength: 140,
          MinLength: 1
        },
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      poster: {
        serializedName: "poster",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Todo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Todo",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      title: {
        constraints: {
          MaxLength: 120,
          MinLength: 1
        },
        serializedName: "title",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MinLength: 1
        },
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      completed: {
        serializedName: "completed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};
