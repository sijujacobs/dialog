// import { newSpecPage } from '@stencil/core/testing';
import { MyPanel } from '../my-panel';
// import { MyApiService } from '../../../service/my-service';

describe('my-panel', () => {
  let myPanel: MyPanel;


  it('should call API service when dialog returns "yes"', async () => {
    myPanel = new MyPanel();
    // Mock the API service
    // const mockSaveRolePermissionData = jest.fn().mockResolvedValue('API response');
    // const mockApiService = {
    //   saveRolePermissionData: mockSaveRolePermissionData
    // };
    // MyApiService.instance = mockApiService;

    // Mock the auditCommentDialog function
    const mockAuditCommentDialog = jest.fn().mockResolvedValue('yes');
    jest.mock('./dialog', () => ({
      auditCommentDialog: mockAuditCommentDialog
    }));

    // Invoke handleClick method
    await myPanel.handleClick();

    // Expectations
    expect(mockAuditCommentDialog).toHaveBeenCalledWith(null, expect.any(Function), 'actionComment');
    // expect(mockSaveRolePermissionData).toHaveBeenCalled();
    // Additional expectations based on the behavior you expect when API service is called
  });
});
